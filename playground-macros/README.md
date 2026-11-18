# A2UI Playground — 3 demonstration macros

**References:** [Playground macros](https://a2ui.open.bot/components/macros) · [Local macro definitions](../src/a2ui/macros/macros.ts) · [Expansion helper](../src/a2ui/macros/macro.ts).

A macro is a compact server-side template that expands into **standard Gen UI components**. It is not a new trusted business action, authorization mechanism, or generic app runtime.

| Macro | When to use | MDE/iPix fit |
| --- | --- | --- |
| FlightCard | Itinerary/flight overview | Optional MDE Trips travel planning |
| ProductCard | Product listing preview | Potential iPix commerce, with grounded product IDs |
| WeatherReport | Forecast overview | Optional MDE trips/events (live sourced weather required) |

## Safe adaptation

1. Start with a native existing card and a user journey.
2. For repeated UI *composition*, review the macro definitions in `src/a2ui/macros/macros.ts` and their supported schema, values, and server expansion.
3. If useful, create a small, source-backed macro. Use server-resolved records and exact authorized IDs; do not trust model-authored prices, locations or action targets.
4. Return bounded standard components from the macro; preserve native submit/save/approval actions.
5. Run schema/expansion tests, invalid-ID and isolation tests, replay, accessibility and browser checks.

**Do not copy** the Playground agent, renderer or demo business APIs into MDE/iPix merely to reuse a macro. Those apps already have their own CopilotKit/Mastra and database boundaries.

**Proposed business macros** (not implemented): MDE `VenueComparison`, `RentalComparison`, `TripChangePreview`; iPix `CampaignConceptSummary`, `ShootReviewSummary`. Add only when actual repeated use proves value.
