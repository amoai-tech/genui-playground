# Table

**Official documentation:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/table
**Catalog:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog
**Group:** Data
**Source page:** https://docs.copilotkit.ai/generative-ui/components/standard-catalog/table

## Purpose

A data table, in a plain Column, not a Card. Give "columns" and "rows", or "children": TableSection or TableRow ids, or a template { "componentId", "path" } repeating a TableRow per item. A component in a cell or header (Badge, Button, Icon, Text): { "componentId": "<id>" }, with the id in "cellComp

## API props (from official reference)

| Prop | Official type |
|---|---|
| `caption?` | `string` |
| `columns?` | `string \| object \| object \| object[]` |
| `rows?` | `object[][]` |
| `columnSizing?` | `"auto" \| "equal"` |
| `dividers?` | `boolean` |
| `stickyHeader?` | `boolean` |
| `emptyLabel?` | `string` |
| `children` | `· multiple` |
| `cellComponents` | `· multiple` |

## Implementation note

Reference only. Check the installed CopilotKit version and renderer schema before use. Agent-authored props must not authorize database writes or invent business facts.

## Live examples

Use the interactive examples and A2UI JSON on the official documentation page linked above.
