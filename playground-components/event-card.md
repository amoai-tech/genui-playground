# EventCard

**Catalog:** Playground extra — Domain (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/EventCard
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/domain.ts)

## Purpose

Event: date block, title, time, venue, host, attendees count, tags, RSVP action. Lead an event or conference with it.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'EventCard' | Yes |
| `title` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `date` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `time` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `venue` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `host` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `description` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `attendees` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `image` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `tags` | array of string or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | No |
| `actionLabel` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `onAction` | binding / reference (Action) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
