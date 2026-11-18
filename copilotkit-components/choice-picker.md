# ChoicePicker

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/choice-picker
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Inputs
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/choice-picker

## Purpose

Options as checkboxes or chips: pick one, or several with variant "multipleSelection". Its value is the list of chosen values. Give it a label.

## API props (from official reference)

| Prop | Official type |
|---|---|
| `checks?` | `object[]` |
| `value?` | `string[]` |
| `options?` | `string \| object[]` |
| `label?` | `string` |
| `variant?` | `"multipleSelection" \| "mutuallyExclusive"` |
| `displayStyle?` | `"checkbox" \| "chips"` |
| `filterable?` | `boolean` |
| `disabled?` | `boolean` |
| `required?` | `boolean` |
| `weight?` | `number` |

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
