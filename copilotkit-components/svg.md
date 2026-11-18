# Svg

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/svg
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Media
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/svg

## Purpose

A vector drawing from primitive shapes (paths, circles, rects, lines, texts). Colors take text color tokens or CSS colors.

## API props (from official reference)

| Prop | Official type |
|---|---|
| `viewBox?` | `string` |
| `label?` | `string` |
| `size?` | `number \| string` |
| `color?` | `string` |
| `fill?` | `string` |
| `stroke?` | `string` |
| `strokeWidth?` | `number` |
| `strokeLinecap?` | `"butt" \| "round" \| "square"` |
| `strokeLinejoin?` | `"miter" \| "round" \| "bevel"` |
| `preserveAspectRatio?` | `string` |
| `paths?` | `object[]` |
| `circles?` | `object[]` |
| `rects?` | `object[]` |
| `lines?` | `object[]` |
| `texts?` | `object[]` |
| `width?` | `number \| string` |
| `height?` | `number \| string` |

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
