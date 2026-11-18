# RouteMap

**Catalog:** Playground extra — Maps (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/RouteMap
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/maps.ts)

## Purpose

Map with a route line through coordinates [[lon,lat],...] plus start/end pins and distance/duration.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'RouteMap' | Yes |
| `title` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `from` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `to` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `coordinates` | array of array of number or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding /  | Yes |
| `distance` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `duration` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `height` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
