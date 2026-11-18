# ProfileCard

**Catalog:** Playground extra — Domain (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/ProfileCard
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/domain.ts)

## Purpose

Person card: avatar, name, role, company, location, bio, contacts, tags, stats. Use for team members, speakers, candidates.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'ProfileCard' | Yes |
| `name` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `role` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `company` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `avatar` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `location` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `bio` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `email` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `phone` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `website` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `tags` | array of string or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | No |
| `stats` | array of object or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
