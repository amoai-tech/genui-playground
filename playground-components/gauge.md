# Gauge

**Catalog:** Playground extra — Charts (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/Gauge
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/charts.ts)

## Purpose

Half-ring gauge for a single value within min..max (score, utilization).

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'Gauge' | Yes |
| `title` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `value` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `min` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `max` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `label` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `format` | number \| currency \| percent \| compact or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
