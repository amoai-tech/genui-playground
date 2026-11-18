# EmptyState

**Catalog:** Playground extra — Feedback (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/EmptyState
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/feedback.ts)

## Purpose

Empty or zero-results state with icon, title, hint and optional action: no matches, nothing scheduled, inbox zero.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'EmptyState' | Yes |
| `title` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `description` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `icon` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `actionLabel` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `onAction` | binding / reference (Action) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
