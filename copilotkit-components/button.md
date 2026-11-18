# Button

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/button
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Inputs
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/button

## Purpose

Sends its onClick event; with href it opens the URL, with copy it copies the text. Variant "primary" for the one main Button in a Row. submit true submits the Form around it. Its children render instead of the label. With checks it is disabled while a check fails.

## API props (from official reference)

| Prop | Official type |
|---|---|
| `label?` | `string` |
| `checks?` | `object[]` |
| `text?` | `string` |
| `variant?` | `"default" \| "primary" \| "soft" \| "borderless"` |
| `color?` | `"primary" \| "secondary" \| "danger"` |
| `size?` | `"sm" \| "md" \| "lg"` |
| `block?` | `boolean` |
| `pill?` | `boolean` |
| `disabled?` | `boolean` |
| `loading?` | `boolean` |
| `submit?` | `boolean` |
| `icon?` | `string` |
| `uniform?` | `boolean` |
| `href?` | `string` |
| `copy?` | `string` |
| `weight?` | `number` |
| `child` | `· single` |
| `children` | `· multiple` |

## Events

- `onClick` · Sent when the user clicks the button.

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
