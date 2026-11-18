# Video

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/video
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Media
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/video

## Purpose

A video file URL (optional captions) or a YouTube link, privacy-enhanced: the poster shows until play. Other video sites show as a link. Set title.

## API props (from official reference)

| Prop | Official type |
|---|---|
| `url` | `string` |
| `posterUrl?` | `string` |
| `title?` | `string` |
| `captions?` | `object[]` |
| `aspectRatio?` | `string` |
| `width?` | `number \| string` |
| `maxWidth?` | `number \| string` |
| `weight?` | `number` |

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
