# FollowUp

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/follow-up
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Composites
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/follow-up

## Purpose

Suggested next prompts as pills; a click sends the pill's message as the user's next turn, no event needed. At the end of a surface, two to four short items.

## API props (from official reference)

| Prop | Official type |
|---|---|
| `items?` | `string \| object[]` |
| `title?` | `string` |

## Events

- `onFollowUp` · Sent when the user clicks a pill. The args carry the message of the pill.

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
