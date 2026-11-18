# Carousel

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/carousel
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Layout
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/carousel

## Purpose

A horizontally scrolling row that snaps to its CarouselItem or CarouselMediaItem children, with arrows. Bind activeIndex to read or set the slide in view.

## API props (from official reference)

| Prop | Official type |
|---|---|
| `align?` | `"start" \| "center" \| "end" \| "baseline" \| "stretch"` |
| `justify?` | `"start" \| "center" \| "end" \| "spaceBetween" \| "spaceAround" \| "spaceEvenly" \| "stretch"` |
| `wrap?` | `"nowrap" \| "wrap" \| "wrap-reverse"` |
| `gap?` | `number \| string` |
| `padding?` | `number \| string` |
| `background?` | `string` |
| `border?` | `boolean` |
| `radius?` | `"2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "full" \| number \| string \| object` |
| `label?` | `string` |
| `visibleItems?` | `number` |
| `showArrows?` | `boolean` |
| `activeIndex?` | `number` |
| `previousLabel?` | `string` |
| `nextLabel?` | `string` |
| `snap?` | `"none" \| "proximity" \| "mandatory"` |
| `snapAlign?` | `"start" \| "center" \| "end"` |
| `rowGap?` | `number \| string` |
| `columnGap?` | `number \| string` |
| `borderColor?` | `"default" \| "subtle" \| "strong" \| "info" \| "warning" \| "caution" \| "success" \| "danger" \| "discovery"` |
| `width?` | `number \| string` |
| `height?` | `number \| string` |
| `minWidth?` | `number \| string` |
| `maxWidth?` | `number \| string` |
| `minHeight?` | `number \| string` |
| `maxHeight?` | `number \| string` |
| `flex?` | `number` |
| `weight?` | `number` |
| `aspectRatio?` | `string` |
| `scrollable?` | `boolean` |
| `clip?` | `boolean` |
| `shadow?` | `boolean` |
| `inline?` | `boolean` |
| `role?` | `string` |
| `flush?` | `boolean` |
| `minSize?` | `number \| string` |
| `maxSize?` | `number \| string` |
| `disableAutoSpacing?` | `boolean` |
| `children` | `· multiple` |

## Events

- `onVisible` · Sent once, the first time the container scrolls into view. Use it to load more content lazily.

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
