# RecipeCard

**Catalog:** Playground extra — Domain (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/RecipeCard
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/domain.ts)

## Purpose

Recipe: title, time/servings/difficulty, ingredient checklist and numbered steps. Use for any recipe or cooking how-to.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'RecipeCard' | Yes |
| `title` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `image` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `time` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `servings` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `difficulty` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `ingredients` | array of string or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | Yes |
| `steps` | array of string or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | Yes |
| `tags` | array of string or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
