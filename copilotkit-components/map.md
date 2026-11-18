# Map

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/map
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Data
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/map

## Purpose

A map with markers; with "route" a line connects them in order. Bind "selected" to get the label of the marker the user picks. Without maps it shows a list of the places.

## API props (from official reference)

| Prop | Official type |
|---|---|
| `markers?` | `object[]` |
| `route?` | `boolean` |
| `selected?` | `string` |
| `zoom?` | `number` |
| `center?` | `object` |
| `height?` | `number` |

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
