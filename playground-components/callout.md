# Callout

**Catalog:** Playground extra — Feedback (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/Callout
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/feedback.ts)

## Purpose

Highlighted tip or note with optional emoji/icon and a call to action.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'Callout' | Yes |
| `title` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `text` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `icon` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `actionLabel` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `onAction` | binding / reference (Action) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
