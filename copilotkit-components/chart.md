# Chart

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/chart
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Data
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/chart

## Purpose

A bar, line, area, scatter, pie or donut chart. "data" is a list of objects. "xKey" is the field of the category. "series" are the value fields.

## API props (from official reference)

| Prop | Official type |
|---|---|
| `chartType?` | `"bar" \| "line" \| "area" \| "scatter" \| "pie" \| "donut"` |
| `data?` | `object[]` |
| `xKey?` | `string` |
| `series?` | `string \| object[]` |
| `stacked?` | `boolean` |
| `layout?` | `"vertical" \| "horizontal"` |
| `yAxis?` | `object` |
| `showDots?` | `boolean` |
| `barRadius?` | `number` |
| `innerRadius?` | `number \| string` |
| `outerRadius?` | `number \| string` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |
| `cornerRadius?` | `number` |
| `paddingAngle?` | `number` |
| `showLabelLines?` | `boolean` |
| `showLegend?` | `boolean` |
| `showGrid?` | `boolean` |
| `showTooltip?` | `boolean` |
| `showValueLabels?` | `boolean` |
| `format?` | `"number" \| "currency" \| "percent"` |
| `currency?` | `string` |
| `title?` | `string` |
| `height?` | `number` |

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
