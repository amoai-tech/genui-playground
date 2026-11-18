# Title

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/title
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Text
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/title

## Purpose

A heading in a Card or next to another component; a heading alone is markdown. Size "2xl" at most once per surface, "lg" for sections. "sm" is an h4, "md"/"lg" an h3 (default "md"), "xl" and up an h2. Bold unless strong is false.

## API props (from official reference)

| Prop | Official type |
|---|---|
| `color?` | `string` |
| `fontWeight?` | `"normal" \| "medium" \| "semibold" \| "bold"` |
| `textAlign?` | `"start" \| "center" \| "end"` |
| `italic?` | `boolean` |
| `truncate?` | `boolean` |
| `maxLines?` | `number` |
| `tabularNums?` | `boolean` |
| `text` | `string` |
| `size?` | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "5xl"` |
| `strong?` | `boolean` |
| `width?` | `number \| string` |

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
