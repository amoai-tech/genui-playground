# Section

**Catalog:** Playground extra — Layout (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/Section
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/layout.ts)

## Purpose

Titled group with eyebrow, title, description, and children.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'Section' | Yes |
| `eyebrow` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `title` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `description` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `children` | binding / reference (ChildList) | Yes |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
