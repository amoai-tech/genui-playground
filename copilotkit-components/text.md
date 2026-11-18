# Text

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/text
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Text
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/text

## Purpose

Body text in a Card or next to another component; a paragraph alone is markdown outside the fence. Color "default" or "secondary". \`text\` takes inline markdown (\*\*bold\*\*, \*italic\*, ~~strike~~, ++underline++, \`code\`, \[link\](url)). \`children\` ids render inline after it, e.g. a Badge.

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
| `text?` | `string \| number` |
| `size?` | `"3xs" \| "2xs" \| "xs" \| "sm" \| "md" \| "lg"` |
| `fontSize?` | `number \| string` |
| `lineHeight?` | `number \| string` |
| `minLines?` | `number` |
| `strong?` | `boolean` |
| `underline?` | `boolean` |
| `lineThrough?` | `boolean` |
| `preserveWhitespace?` | `boolean` |
| `highlight?` | `"green" \| "orange" \| "pink" \| boolean` |
| `width?` | `number \| string` |
| `weight?` | `number` |
| `inline?` | `boolean` |
| `children` | `· multiple` |

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
