# Switch

**Catalog:** Playground extra — Inputs (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/Switch
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/inputs.ts)

## Purpose

On/off toggle with label and description.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'Switch' | Yes |
| `label` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `value` | boolean or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `description` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
