# Combobox

**Catalog:** Playground extra — Inputs (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/Combobox
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/inputs.ts)

## Purpose

Searchable dropdown for long option lists (countries, cities, timezones).

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'Combobox' | Yes |
| `label` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `value` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `options` | array of object or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | Yes |
| `placeholder` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
