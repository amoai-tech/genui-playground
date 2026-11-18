# CopilotKit Generative UI — Reference Guide

**Purpose:** Practical instructions for using CopilotKit Gen UI 2.0, A2UI 1.0, and the local A2UI Playground when designing features for **MDE AI** and **iPix**.

**Source checked:** Official CopilotKit documentation on 2026-11-18. The documentation calls Components & Surfaces **experimental**; check installed package types and pinned official examples before implementation.

## Start here

| Goal | Read |
| --- | --- |
| Understand the whole system | [Components](https://docs.copilotkit.ai/generative-ui/components) |
| Show AI results inside a real page | [Surfaces](https://docs.copilotkit.ai/generative-ui/components/surfaces) |
| Define typed, allowed UI | [Catalogs](https://docs.copilotkit.ai/generative-ui/components/catalogs) |
| Reuse official components | [Standard Catalog](https://docs.copilotkit.ai/generative-ui/components/standard-catalog) |
| Connect buttons, editable forms, live data | [State and Actions](https://docs.copilotkit.ai/generative-ui/components/state-and-actions) |
| Match the app's design | [Theming](https://docs.copilotkit.ai/generative-ui/components/theming) |
| Decide how generated UI travels | [Transports](https://docs.copilotkit.ai/generative-ui/components/transports) |
| Stream A2UI code blocks | [Markdown Mode](https://docs.copilotkit.ai/generative-ui/components/markdown-mode) |
| Migrate older A2UI integrations | [Adopt from A2UI](https://docs.copilotkit.ai/generative-ui/components/from-a2ui) |
| Generate variable UI layouts | [Dynamic Schema A2UI](https://docs.copilotkit.ai/generative-ui/a2ui/dynamic-schema) |
| Use a predefined layout | [Fixed Schema A2UI](https://docs.copilotkit.ai/generative-ui/a2ui/fixed-schema) |
| Show UI from an MCP tool | [MCP Apps](https://docs.copilotkit.ai/generative-ui/mcp-apps) |
| Generate sandboxed HTML/CSS/JS | [Open Generative UI](https://docs.copilotkit.ai/generative-ui/open-generative-ui) |

## Our recommended workflow

1. **Start with the user journey.** Example: “Find Laureles rentals → compare cards → request a viewing.” Choose where UI should appear.
2. **Inspect the target app first** (MDE/iPix latest clean `origin/main`, `AGENTS.md`, Linear task, lockfile, installed TypeScript types, existing provider/catalog/Surface, authorized data/actions). Do not assume the Playground is the app.
3. **Design in the Playground:** `http://localhost:3100` (iPix copy) or `http://localhost:3500` (MDE copy). Export A2UI JSON and desktop/mobile screenshots; keep customer or private data out of public commits.
4. **Choose the simplest renderer:** reuse the native app component → official standard component → tiny ID-bound component → custom macro only for repeated visual patterns. A fixed, typed layout is often better than unrestricted generation.
5. **Keep one app-level catalog/provider.** Add only components the page needs. For named page targets, specify a bounded `components` list and a native `fallback`.
6. **Bind trusted values/actions.** Agent outputs **proposals and IDs**, not authorization or source-of-truth prices, inventory, dates or payments. Server checks ownership; user confirms any write; retry safely.
7. **Verify** schema/typecheck → contract/unit tests → real browser journey at 1440/768/390 px → cross-user isolation → actual saved result. Capture PR SHA and evidence; merge only after owner approval.

## Page-specific recommendations

| App / page | Surface / components | Real-world result |
| --- | --- | --- |
| MDE Rentals | Existing rental-recommendations Surface + ID-bound RentalCard, Column, filter controls | Real listings on the page; native map/detail/viewing remains authoritative |
| MDE Events | Existing EventCard and event recommendation Surface | Real event cards → native ticket tier and checkout |
| MDE Restaurants / Cafés / Nightlife | Shared venue comparison pattern using approved Table/Citation | Compare sourced venues without three duplicate renderers |
| MDE Trips | Proposed scoped TripChangePreview | Review → confirm → exactly one stored itinerary change |
| MDE Broker/Host Dashboards | Approved Table/Chart/Badge from tenant-scoped loaders | Real counts and trends; no invented metrics |
| iPix Production Planner | Existing qualitative ConceptComparison | Compare shoot concepts before human selects or saves |
| iPix Brands / Shoots | Approved summary surfaces on existing pages | Evidence-backed brand research and shoot proposal review |

**Do not** enable all 69 standard components just because they exist, assume the Playground's extra 52 components are installed in MDE/iPix, expose private database access to an agent component, or add a second Mastra/CopilotKit runtime. The Playground's 3 demonstration macros (ProductCard, FlightCard, WeatherReport) are design examples, not a default MDE/iPix integration.

## Local reference locations

- This guide: `/home/sk/github-repos/a2ui-playground/copilotkit-docs/`
- Detailed implementation instructions: [IMPLEMENTATION-GUIDE.md](./IMPLEMENTATION-GUIDE.md)
- Original Playground: `/home/sk/github-repos/a2ui-playground/`
- Separate MDE Playground: `/home/sk/github-repos/a2ui-playground-mde/`
- CopilotKit example snapshot: `/home/sk/github-repos/copilotkit examples/`
- MDE application: https://github.com/amoai-tech/mdeai
- iPix application: https://github.com/amoai-tech/ipixai

## Important version distinctions

- **Components & Surfaces:** current **A2UI 1.0** engine; typed `createGenerativeUI`, `standardUI`, and `GenerativeUISurface`.
- **Older A2UI renderer:** `@copilotkit/a2ui-renderer` with `createCatalog` and possibly v0.9 — **not** a drop-in replacement for current `generativeUI` mode.
- **Fixed/Dynamic Schema examples:** some demonstrate the older renderer/injection path. Use them as concepts until installed versions confirm compatibility.
- **MDE:** check actual installed version; the Nov 17 task baseline reports CopilotKit 1.84.1 and SAN-1690 owns a proposed 1.88 upgrade. Do not assume upgraded.
- **iPix:** check lockfile and deployed head; never infer production readiness from the example snapshot.

**Maintenance:** After a CopilotKit version change, revisit each linked official page, record version-specific changes in the application task, rerun catalog/provider/schema and browser tests.

## Playground-only extensions

- [52 extra Playground components](../playground-components/README.md) — **not** CopilotKit standardUI; need explicit registration to be available in an application.
- [3 built-in macro references](../playground-macros/README.md) — compact server-side templates expanded into standard components.
