# Heatmap

**Catalog:** Playground extra — Charts (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/Heatmap
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/charts.ts)

## Purpose

Matrix of values, e.g. day x hour. data [{x,y,value}] with x,y categories.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'Heatmap' | Yes |
| `title` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `subtitle` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `height` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `format` | number \| currency \| percent \| compact or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `unit` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `data` | array of object or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | Yes |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
