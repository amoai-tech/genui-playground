# ComparisonTable

**Catalog:** Playground extra — Data display (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/ComparisonTable
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/data.ts)

## Purpose

Feature matrix comparing options side by side. options are the option names as strings; rows [{feature, values}] with one value per option, in the same order, each true/false/text; highlight is the recommended option's index in options (0 is the first).

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'ComparisonTable' | Yes |
| `title` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `options` | array of string or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | Yes |
| `rows` | array of object or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | Yes |
| `highlight` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
