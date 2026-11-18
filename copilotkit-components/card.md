# Card

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/card
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Layout
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/card

## Purpose

A bordered panel, only for an interactive panel (controls, a form, a configurator); tables, charts and text need none. Give it a Title and a Caption. Separate groups with a Divider or the gap, never a nested Card or bordered Box. Variant "section": no box; "outline": always a box. In markdown mode,

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
| `variant?` | `"default" \| "outline" \| "section" \| "soft" \| "elevated" \| "transparent"` |
| `shadowStyle?` | `"none" \| "sm" \| "md"` |
| `size?` | `"sm" \| "md" \| "lg"` |
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
| `child` | `· single` |
| `children` | `· multiple` |

## Events

- `onVisible` · Sent once, the first time the container scrolls into view. Use it to load more content lazily.

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
