# CopilotKit Generative UI — Implementation Instructions

> Read the [README](./README.md) first. This guide maps **all 13 official pages** to implementation choices. Every external reference must be consumed by a specific task/file/test, not copied wholesale. Last reviewed 2026-11-18.

## Decision tree

```text
Do we already have a working native UI?
  YES → keep it; expose an ID-bound adapter/safe action only if needed.
  NO  → is the layout repeatable?
          YES → fixed typed card/Surface; consider a macro for repeated A2UI compositions.
          NO  → bounded dynamic A2UI using a small catalog.
Does it change durable state?
  YES → user reviews → trusted server revalidates → idempotent mutation → readback.
Does it need charts, counts, maps, price or booking status?
  YES → source-backed tool/data loader; never let the model invent values.
```

## 1 — Components: decide the business outcome

**Reference — MODEL / REFERENCE ONLY**\
URL: https://docs.copilotkit.ai/generative-ui/components\
**Use:** CopilotKit Gen UI 2.0 generates React or other supported framework UI in chat or a page area. Components & Surfaces implements **A2UI 1.0**, documented as experimental. The application defines what can render and where.\
**Do not copy:** demo TanStack agent/runtime into existing Mastra/CopilotKit apps.\
**Apply to:** existing MDE `src/components/copilot/a2ui/mde-ui-catalog.tsx` or iPix `src/lib/copilotkit/ipix-generative-ui.tsx`.\
**Verify:** catalog + version types, an actual agent-generated UI operation and a native fallback.

## 2 — Surfaces: put AI UI in the right place

**Reference — ADAPT**\
URL: https://docs.copilotkit.ai/generative-ui/components/surfaces\
**API:** `GenerativeUISurface` with `id`, `ui`, `description`, `components`, `fallback`. A mounted page target is exposed to the agent; chat is a separate target. An existing live surface can take precedence over fallback until deleted.\
**Use:** Put apartment recommendations in the rental results region instead of a long chat bubble. Distinguish target IDs by scope, avoid stale data on navigation/thread changes, and restrict allowed components.

```tsx
import { GenerativeUISurface } from "@copilotkit/react-core/v2/generative-ui";
import { mdeUI } from "@/components/copilot/a2ui/mde-ui-catalog";

// Example pattern only: adapt to actual version, mounted agent and scoped page.
<GenerativeUISurface
  id="rental-recommendations"
  ui={mdeUI}
  description="Show only current authorized apartment IDs as RentalCard."
  components={["RentalCard", "Column", "Row", "Title"]}
  fallback={<ExistingRentalResults />}
/>
```

**Do not copy:** retail ProductGrid, fake apartments, separate search service, or model-supplied business facts.\
**Apply to:** MDE existing `rental-recommendations-surface.tsx` (already mounted); iPix's approved Planner surface task when ready.\
**Verify:** real cards, target mount/unmount, delete/fallback, thread replay, invalid and foreign IDs, desktop and mobile.

## 3 — Catalogs: one typed contract

**Reference — ADAPT**\
URL: https://docs.copilotkit.ai/generative-ui/components/catalogs\
**API:** `createGenerativeUI({ id, components })`, Zod `props`, `description`, `slots` with single/multiple children; provider `generativeUI={{ ui }}`.\
**Use:** Keep a single versioned catalog identifier per app, explicit schema per component, and an allowlist of what the model may fill. For example `RentalCard({ listingId })` resolves tenant-approved listing details from current results.\
**Do not copy:** a demo `ProductCard` that accepts model-written price as authoritative, or a second provider/catalog.\
**Apply to:** MDE `mde-ui-catalog.tsx`; iPix `ipix-generative-ui.tsx`.\
**Verify:** valid props render, invalid/unknown component rejected, no foreign entity/action IDs, catalog drift test.

## 4 — Standard Catalog: use a safe subset

**Reference — ADAPT**\
URL: https://docs.copilotkit.ai/generative-ui/components/standard-catalog\
**API:** `standardUI`, optional `standardUI.omit([...])` with catalog composition. It contains 69 standard components, including layout, tables, charts, inputs and media; basic A2UI 1.0 names/props differ from older demos.\
**Use:** Approve `Card`, `Column`, `Row`, `Title`, `Table`, `Badge`, `Chart` only where needed. Keep page/surface allowlists smaller than the app catalog.\
**Do not copy:** entire 69-component registration by default, or Playground-only extras (52) as if part of official `standardUI`.\
**Verify:** installed prop schemas, accessibility, action wiring, responsive overflow, no unsupported components allowed.

## 5 — State and Actions: make controls real

**Reference — ADAPT**\
URL: https://docs.copilotkit.ai/generative-ui/components/state-and-actions\
**API:** catalog `state` and `bind`; `useGenerativeUIState` for live values; catalog `functions` + component `events` + `useGenerativeUIFunction` for app handlers; writable `@path` data for editable fields.\
**Use:** An AI bedroom filter updates the existing rental filter draft; Apply calls the real search. A viewing-date proposal lets the renter edit, then hands off to existing authenticated viewing request UI.\
**Do not copy:** invented success, direct agent-authorized DB writes, forced updates that overwrite user edits, button labels used as authorization.\
**Apply to:** MDE `mde-ui-catalog.tsx`, rental filter draft, viewing proposal; iPix approved human review workflow.\
**Verify:** change value → existing native state updates → user confirms → exactly one persisted action; invalid/foreign IDs denied.

## 6 — Theming: match the product

**Reference — ADAPT**\
URL: https://docs.copilotkit.ai/generative-ui/components/theming\
**API:** provider `generativeUI.theme` values such as `--a2ui-color-accent`, `--a2ui-font-family`, `--a2ui-radius-md`; `GenerativeUITheme` typing. Dark mode inherits the `dark` ancestor class.\
**Use:** Share MDE/iPix design tokens across assistant cards and existing native views.\
**Do not copy:** unrelated Playground theme or unsupported arbitrary CSS-variable names.\
**Verify:** light/dark screenshots, focus/contrast, 1440/768/390 px, no unstyled fallback.

## 7 — Transports: tool by default

**Reference — REFERENCE ONLY / ADAPT**\
URL: https://docs.copilotkit.ai/generative-ui/components/transports\
**API:** default tool transport uses `render_ui`; `transport: "markdown"` sends UI as tagged `a2ui` code blocks. Catalog, Surface and component behavior otherwise remain the same.\
**Use:** Keep existing native AG-UI/tool transport unless evidence proves markdown improves compatibility.\
**Do not copy:** second transport stack or duplicate runtime.\
**Verify:** streamed create/update/delete, Stop, refresh, persisted conversation and malformed operations.

## 8 — Markdown Mode: optional text-stream path

**Reference — REFERENCE ONLY**\
URL: https://docs.copilotkit.ai/generative-ui/components/markdown-mode\
**API:** provider `generativeUI={{ ui, transport: "markdown" }}`; agent emits `a2ui` fenced blocks with `version: "1.0"` operations; app/agent must pass guide/context.\
**Use:** Only if the existing agent can reliably stream text but cannot pass `render_ui` tool calls.\
**Do not copy:** example seat pricing as actual inventory or assume compatibility with every runtime.\
**Verify:** real streaming UI and fallback, no visible raw protocol on error, safe resume.

## 9 — Adopt from A2UI: distinguish two engines

**Reference — REFERENCE ONLY**\
URL: https://docs.copilotkit.ai/generative-ui/components/from-a2ui\
**Use:** Understand differences between `@copilotkit/a2ui-renderer` (`createCatalog`, often v0.9) and newer `@copilotkit/react-core/v2/generative-ui` (`createGenerativeUI`, A2UI 1.0). Older surfaces/history and adapters need explicit compatibility decisions.\
**Do not copy:** legacy provider `a2ui={{ catalog }}` into a native `generativeUI` app.\
**Verify:** actual installed SDK, wire format, history replay, no duplicate renderer or migration.

## 10 — Dynamic Schema A2UI: flexible design only when needed

**Reference — MODEL**\
URL: https://docs.copilotkit.ai/generative-ui/a2ui/dynamic-schema\
**Use:** Concept of AI generating differing component arrangements for broad open-ended questions. This page also documents legacy BYOC `createCatalog` / `injectA2UITool` paths.\
**Do not copy:** its older runtime implementation wholesale into the current 1.0 catalog.\
**Apply to:** experimental Playground prompt/screenshot; bounded MDE trip comparison or iPix creative proposal only if fixed layouts are inadequate.\
**Verify:** permitted component list, deterministic identity and no invented values.

## 11 — Fixed Schema A2UI: first choice for repeated cards

**Reference — MODEL**\
URL: https://docs.copilotkit.ai/generative-ui/a2ui/fixed-schema\
**Use:** Predefine a repeated layout while varying authorized data. Example: rental comparison rows or iPix shoot review cards. The page's backend operation shape may be tied to older A2UI integrations.\
**Do not copy:** flight booking tool, separate agent or old renderer.\
**Verify:** known layout, data hydration, safe events and business flow.

## 12 — MCP Apps: third-party widgets only where valuable

**Reference — REFERENCE ONLY**\
URL: https://docs.copilotkit.ai/generative-ui/mcp-apps\
**API:** `CopilotRuntime({ mcpApps: { servers: [{ type:"http", url, serverId }] } })`; server exposes tools with UI resources. Widgets render in sandboxed iframes; stable `serverId` is important for replay.\
**Use:** Future vetted external widget, e.g., a specialized partner tool with a reviewed UI.\
**Do not copy:** demo remote MCP server, unrestricted tool access, or presume iframe UI has tenant permissions.\
**Verify:** server allowlist, authorization, CSP/iframe behavior, replay, denied cross-tenant actions.

## 13 — Open Generative UI: isolated experiments, not core transactions

**Reference — REFERENCE ONLY**\
URL: https://docs.copilotkit.ai/generative-ui/open-generative-ui\
**API:** `CopilotRuntime({ openGenerativeUI: { agents: [...] } })` makes sandboxed HTML/CSS/JS rendering available to specified agents; they must receive frontend tools to invoke it.\
**Use:** Optional creative demos/isolated analysis visuals.\
**Do not copy:** unbounded CDN/JS UI into trusted dashboard, checkout, broker, approval, or iPix publishing workflows; generated HTML must never be the authorization boundary.\
**Verify:** sandbox isolation, allowed network behavior, no secrets, safe rendering and no privileged actions.

## Reusable implementation checkpoint

For each actual task write:

- **User outcome:** what improves on the real page
- **Current owner:** source path, existing domain/API/provider, Linear issue
- **Reference:** exact URL + page section / API + COPY, ADAPT, MODEL or REFERENCE ONLY
- **Reuse:** existing native React > installed SDK > official component > narrow custom
- **Do not copy:** demo agent, auth shortcut, fake record, parallel DB/provider
- **Destination / change:** exact app source file and component/function
- **Proof:** unit/contract, browser desktop/mobile, authorization negative test, actual readback
- **STOP:** if installed API differs, tenant scope is unproved, or a UI action cannot be confirmed

## Local reusable examples

- `/home/sk/github-repos/copilotkit examples/integrations/mastra/` — **MODEL/ADAPT**, check version before using agent/runtime patterns.
- `/home/sk/github-repos/copilotkit examples/showcases/a2ui-playground/` — **MODEL**, dynamic surfaces, components and macro concepts.
- `/home/sk/github-repos/copilotkit examples/v2/a2ui-markdown/` — **REFERENCE ONLY**, optional transport.
- `/home/sk/github-repos/copilotkit examples/v2/generative-ui-shop/` — **MODEL**, product cards for iPix commerce.
- `/home/sk/github-repos/copilotkit examples/canvas/mastra-pm/` — **MODEL**, production planning ideas.

> This is documentation only. Do not change MDE/iPix runtime or commit/delete exports as part of creating this guide.
