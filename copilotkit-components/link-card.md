# LinkCard

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/link-card
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Composites
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/link-card

## Purpose

A preview of a URL: favicon and domain, title, description, thumbnail. A click opens it in a new tab, or sends onClick when bound. For sources, articles and products with a page.

## API props (from official reference)

| Prop | Official type |
|---|---|
| `href` | `string` |
| `title` | `string` |
| `description?` | `string` |
| `image?` | `string` |
| `domain?` | `string` |
| `favicon?` | `boolean` |

## Events

- `onClick` · Sent when the user clicks the card, instead of the link.

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
