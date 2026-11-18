# ButtonGroup

**Catalog:** Playground extra — Inputs (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/ButtonGroup
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/inputs.ts)

## Purpose

Segmented single-choice control; value bound to a path.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'ButtonGroup' | Yes |
| `label` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `value` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `options` | array of object or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | Yes |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
