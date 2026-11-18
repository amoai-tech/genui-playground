# Kbd

**Catalog:** Playground extra — Content (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/Kbd
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/content.ts)

## Purpose

Keyboard shortcut chips, e.g. keys ['Cmd','K'] with a label. Use for shortcuts and how-to steps.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'Kbd' | Yes |
| `keys` | array of string or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | Yes |
| `label` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
