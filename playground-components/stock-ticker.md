# StockTicker

**Catalog:** Playground extra — Domain (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/StockTicker
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/domain.ts)

## Purpose

Stock quote header: symbol, name, price, change and % change, sparkline, key stats. sample:true labels illustrative data.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'StockTicker' | Yes |
| `symbol` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `name` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `price` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `change` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `changePct` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `currency` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `series` | array of number or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | No |
| `stats` | array of object or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | No |
| `sample` | boolean or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
