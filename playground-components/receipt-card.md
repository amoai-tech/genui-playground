# ReceiptCard

**Catalog:** Playground extra — Domain (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/ReceiptCard
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/domain.ts)

## Purpose

Order receipt: merchant, order id, date, line items with qty and price, subtotal/tax/total, status.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'ReceiptCard' | Yes |
| `merchant` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `orderId` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `date` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `status` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `items` | array of object or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | Yes |
| `currency` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `tax` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `shipping` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `discount` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `payment` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
