# LocationCard

**Catalog:** Playground extra — Maps (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/LocationCard
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/maps.ts)

## Purpose

Single place (venue, hotel, office): mini map, name, address, category, rating, actions. Use instead of MapView for one place.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'LocationCard' | Yes |
| `name` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `address` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `lat` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `lon` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `category` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `rating` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `hours` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
