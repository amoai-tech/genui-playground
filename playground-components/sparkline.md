# Sparkline

**Catalog:** Playground extra — Charts (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/Sparkline
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/charts.ts)

## Purpose

Tiny trend with label and latest value; a compact KPI with history, fits in a Grid instead of Stat. values: numbers.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'Sparkline' | Yes |
| `label` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `values` | array of number or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | Yes |
| `value` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `delta` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `tone` | positive \| negative \| default or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
