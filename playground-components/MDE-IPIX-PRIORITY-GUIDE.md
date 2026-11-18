# Priority Gen UI Components — MDE and iPix

**Purpose:** Select a small number of existing A2UI Playground components for real MDE and iPix product journeys. This is a **reference and implementation checklist**, not a request to register all components in either production app.

**Sources:** [A2UI Playground catalog](https://a2ui.open.bot/components), the [local exported Playground catalog](../src/a2ui/export/catalog.json), and linked component reference pages below. The four map definitions were also verified against their individual live Playground pages on 2026-11-18.

## Priority matrix

| Component | Priority | MDE use case | iPix use case | Implementation reference |
| --- | --- | --- | --- | --- |
| [ComparisonTable](./comparison-table.md) | High | Compare real rental prices, area, beds or restaurants with sourced fields | Compare campaign concepts or creative alternatives | Data comparison only; no model-invented claims |
| [StatGroup](./stat-group.md) | High | Broker leads, upcoming viewings, ticket sales from tenant-scoped reports | Campaign KPIs from actual analytics | Show period/source; no fabricated numbers |
| [DataTable](./data-table.md) | High | Broker listings, leads, event tickets | Assets, inventory, production tasks | Keep native edits and permissions |
| [PlaceList](./place-list.md) | High | Real rental, café, restaurant and nightlife results linked to map | Studio or location shortlist for shoots | Use actual place IDs and source-backed coordinates |
| [ImageGallery](./image-gallery.md) | High | Rental and venue photos | Fashion campaign and shoot assets | Use authorized media URLs/Cloudinary when available |
| [Agenda](./agenda.md) | High | Event schedule and upcoming viewings | Shoot schedule and call sheet | Keep real time zones and dates |
| [ChipSelect](./chip-select.md) | High | Amenities, neighborhood and cuisine filters | Campaign tags and asset filters | Wire to existing filter state; preserve user edits |
| [EmptyState](./empty-state.md) | High | No matching rentals/events or no broker leads yet | No campaign assets yet | Distinguish empty from error/loading |
| [RouteMap](./route-map.md) | Medium | Multi-stop travel / trip itinerary | Multi-location shoot plan | Requires actual route geometry, not a straight-line guess |
| [Timeline](./timeline.md) | Medium | Booking status or event lifecycle | Creative approval and production milestones | Use actual durable event/status history |
| [MapView](./map-view.md) | High for maps | Display multiple verified rental/venue markers | Show shoot location options | Reuse MDE/iPix existing map if it already works |
| [LocationCard](./location-card.md) | High for details | One restaurant, apartment or event location | One studio or shoot location | Resolve coordinates and details from a trusted source |

## Map components — when to use each

### MapView — multiple locations

**Source:** https://a2ui.open.bot/components/MapView
**Reference — MODEL / ADAPT:** `src/a2ui/catalog/definitions/maps.ts` → `mapDefinitions.MapView` and [local props](./map-view.md).

- **Props:** `markers` required as `[{ id?, name, lat, lon, description?, category? }]`; optional `title`, `height`, `zoom`.
- **MDE example:** User asks for five apartments around Laureles. Display five verified markers, preserving the existing list/card ↔ pin identity.
- **iPix example:** Show approved studio locations for a shoot.
- **Do not copy:** a second map framework or model-generated coordinates.
- **Verify:** correct pin IDs, valid latitude/longitude, empty-state behavior and map/card selection on desktop and mobile.

### RouteMap — connected journey

**Source:** https://a2ui.open.bot/components/RouteMap
**Reference — MODEL / ADAPT:** `src/a2ui/catalog/definitions/maps.ts` → `mapDefinitions.RouteMap` and [local props](./route-map.md).

- **Props:** `from`, `to`, and `coordinates: number[][]` are required; optional `title`, `distance`, `duration`, `height`.
- **Critical:** Route coordinate pairs use **[longitude, latitude]**, unlike separate `lat`/`lon` marker properties. They must come from a real routing provider or trusted route data.
- **MDE example:** Trip itinerary with a known route between a café, museum and restaurant.
- **iPix example:** Approved multi-location production route.
- **Do not copy:** hard-coded example distance, duration or inferred driving route.
- **Verify:** order and orientation of coordinates, actual route geometry, source-backed distance/time, map integration and failure fallback.

### LocationCard — one location

**Source:** https://a2ui.open.bot/components/LocationCard
**Reference — MODEL / ADAPT:** `src/a2ui/catalog/definitions/maps.ts` → `mapDefinitions.LocationCard` and [local props](./location-card.md).

- **Props:** `name`, `lat`, `lon` required; optional `address`, `category`, `rating`, `hours`.
- **MDE example:** Display an exact restaurant venue on its Details page, showing rating/hours only when sourced.
- **iPix example:** Provide one approved shoot location's address and map.
- **Do not copy:** sample venue facts, assumed open hours or browser-trusted booking actions.
- **Verify:** actual place ID, verified coordinates, accessible link and correct details after refresh.

### PlaceList — synchronized list and map

**Source:** https://a2ui.open.bot/components/PlaceList
**Reference — MODEL / ADAPT:** `src/a2ui/catalog/definitions/maps.ts` → `mapDefinitions.PlaceList` and [local props](./place-list.md).

- **Props:** `places` required, each with `{ id?, name, lat, lon, description?, category?, address?, distanceKm?, rating? }`; optional `title`, `source`, `selected` (row index), `height`, `basemap: "dark" | "streets" | "liberty"`.
- **MDE example:** A renter highlights the third apartment and the matching map pin updates, with the same canonical listing ID in the existing native map.
- **iPix example:** Compare shoot locations and focus the selected pin.
- **Caution:** This Playground component's `selected` is a **row index**, not a persistent place ID. Translate selected row to canonical place ID at the app boundary; don't use list position as an authorization or mutation target.
- **Do not copy:** parallel search/map state if MDE already implements synchronized cards/pins.
- **Verify:** selection after reordering/filtering, stale IDs, keyboard selection, mobile responsiveness, and no invented place/rating data.

## One implementation pattern, four safeguards

1. **Choose the user outcome:** What would improve on the real page? Prefer existing app React components before installing or copying a Playground renderer.
2. **Validate component API:** Read the relevant local schema and renderer, the target app's installed CopilotKit exports/types, and the page's existing data/action owner. The 52 Playground extras are **not** in the 69-component `standardUI`.
3. **Use real application truth:** AI suggests layout, filters or source IDs; the existing authorized backend resolves facts. User approval and server revalidation precede any save, publish, payment or deletion.
4. **Prove the real journey:** Unit/contract → page/browser 1440/768/390px → cross-tenant denial → persisted DB readback where actions save data. Keep native fallback and no duplicate provider.

## Suggested first pilots

| Pilot | Existing owner | Smallest useful result |
| --- | --- | --- |
| MDE Rental browse | Existing RentalCard / map / filters | Source-backed ComparisonTable or PlaceList visualization with exact ID sync |
| MDE Cafés / Restaurants | Existing venue browsing / shared Ask MDE | ComparisonTable and existing venue Details actions |
| MDE Trips | Existing trip workspace / route/map tools | RouteMap only if actual route geometry exists; otherwise preserve native map |
| MDE Broker Dashboard | Existing authenticated broker summary | StatGroup or Table with verified KPIs |
| iPix campaign review | Existing Planner review/approval | ComparisonTable for two generated concepts before user selects |

**Stop if:** a proposed component requires a second runtime, a source field is unknown, the app's authorization boundary is unclear, or installed types do not support the component. Reference notes do not certify production integration.
