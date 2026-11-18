# TextField

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/text-field
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Inputs
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/text-field

## Purpose

A text input, single-line unless variant is "longText". Bind value with { "@path": "/x" } to read what the user typed. Give it a label.

## API props (from official reference)

| Prop | Official type |
|---|---|
| `checks?` | `object[]` |
| `value?` | `string \| number` |
| `placeholder?` | `string` |
| `label?` | `string` |
| `variant?` | `"shortText" \| "longText" \| "number" \| "obscured" \| "email" \| "url" \| "tel"` |
| `name?` | `string` |
| `required?` | `boolean` |
| `disabled?` | `boolean` |
| `invalid?` | `boolean` |
| `size?` | `"sm" \| "md" \| "lg" \| "xl"` |
| `pill?` | `boolean` |
| `autoSelect?` | `boolean` |
| `mask?` | `string` |
| `weight?` | `number` |

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
