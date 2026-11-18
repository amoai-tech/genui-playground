# Image

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/image
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Media
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/image

## Purpose

An image from a URL. A click opens it full-screen. Set description to say what the image shows, unless it is only decoration.

## API props (from official reference)

| Prop | Official type |
|---|---|
| `url` | `string` |
| `description?` | `string` |
| `variant?` | `"icon" \| "avatar" \| "smallFeature" \| "mediumFeature" \| "largeFeature" \| "header"` |
| `fit?` | `"cover" \| "contain" \| "fill" \| "none" \| "scaleDown"` |
| `radius?` | `"2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "full" \| number \| string \| object` |
| `background?` | `string` |
| `frame?` | `boolean` |
| `position?` | `string` |
| `hideOnFailure?` | `boolean` |
| `fallback?` | `string` |
| `hoverZoom?` | `boolean` |
| `lightbox?` | `boolean` |
| `actionOverlay?` | `object` |
| `weight?` | `number` |
| `aspectRatio?` | `string` |
| `width?` | `number \| string` |
| `height?` | `number \| string` |
| `maxWidth?` | `number \| string` |
| `maxHeight?` | `number \| string` |
| `minWidth?` | `number \| string` |
| `minHeight?` | `number \| string` |

## Events

- `onOverlayClick` · Sent when the user clicks the actionOverlay button and it has no href.

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
