# PlaceList

**Catalog:** Playground extra — Maps (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/PlaceList
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/maps.ts)

## Purpose

Split view: ranked list of places linked to a map; hovering/clicking a row highlights its marker. selected (row index) starts with that row highlighted.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'PlaceList' | Yes |
| `title` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `places` | array of object or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | Yes |
| `source` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `selected` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `height` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `basemap` | dark \| streets \| liberty or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
