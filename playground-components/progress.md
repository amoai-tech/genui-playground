# Progress

**Catalog:** Playground extra — Data display (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/Progress
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/data.ts)

## Purpose

Labelled progress bar, value 0-100: goals, budgets used, completion, coverage.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'Progress' | Yes |
| `label` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `value` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `caption` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `tone` | default \| positive \| negative \| warning \| info \| accent or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
