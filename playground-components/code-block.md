# CodeBlock

**Catalog:** Playground extra — Content (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/CodeBlock
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/content.ts)

## Purpose

Syntax-colored code with language label and copy button. Use for any code, config, command or diff snippet.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'CodeBlock' | Yes |
| `code` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `language` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `filename` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
