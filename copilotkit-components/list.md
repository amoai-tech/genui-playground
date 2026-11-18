# List

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/list
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Data
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/list

## Purpose

A list in a Card or next to another component; a plain list of text is markdown. Give "items": an item with a value and no action is a key-value row (Price: $1,599). Or give "children": ListItem ids or a template. With "action" the user picks an item; the event context gets its index, label and valu

## API props (from official reference)

| Prop | Official type |
|---|---|
| `items?` | `string \| object[]` |
| `direction?` | `"vertical" \| "horizontal"` |
| `align?` | `"start" \| "center" \| "end" \| "stretch"` |
| `marker?` | `"bullet" \| "number" \| "rich" \| "none"` |
| `connector?` | `"none" \| "solid"` |
| `gap?` | `number \| string` |
| `start?` | `number` |
| `maxMarkerSize?` | `number` |
| `weight?` | `number` |
| `children` | `· multiple` |

## Events

- `action` · Runs when the user picks an item. The args are the index, label and value of the item.

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
