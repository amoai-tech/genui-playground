# EntityCard

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/entity-card
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Composites
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/entity-card

## Purpose

A card for one product, place, person or listing: image, title, subtitle, description, a price or meta line, badge, rating and up to three buttons. href opens a page; onClick is sent when bound. Use a Grid of them for several things.

## API props (from official reference)

| Prop | Official type |
|---|---|
| `title` | `string` |
| `subtitle?` | `string` |
| `description?` | `string` |
| `image?` | `string` |
| `imageAspectRatio?` | `string` |
| `meta?` | `string` |
| `badge?` | `object` |
| `rating?` | `number` |
| `ratingCount?` | `number` |
| `href?` | `string` |
| `actions?` | `object[]` |
| `layout?` | `"vertical" \| "horizontal"` |
| `width?` | `number \| string` |

## Events

- `onClick` · Sent when the user clicks the card and it has no href.
- `onAction` · Sent when the user clicks a button without href. The args carry the label of the button.

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
