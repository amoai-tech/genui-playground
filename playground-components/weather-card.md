# WeatherCard

**Catalog:** Playground extra — Domain (not in standardUI).
**Live reference:** https://a2ui.open.bot/components/WeatherCard
**Implementation:** [Local schema](../src/a2ui/catalog/definitions/domain.ts)

## Purpose

Current weather hero with condition icon, temp, high/low, details, an hourly strip and daily forecast. icon: sun|cloud-sun|cloud|fog|drizzle|rain|snow|storm.

## Schema properties (from local exported catalog)

| Property | Type / allowed values | Required |
| --- | --- | --- |
| `component` | 'WeatherCard' | Yes |
| `location` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `temp` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `condition` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | Yes |
| `icon` | string or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `high` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `low` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `feels` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `humidity` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `wind` | number or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `unit` | C \| F or binding / reference (DataBinding) or binding / reference (FunctionCall) | No |
| `hourly` | array of object or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | No |
| `daily` | array of object or binding / reference (DataBinding) or binding / reference (FunctionCall) or binding / reference (DataBinding) or binding / reference | No |

## Reuse rules

- Check the actual component definition and renderer before implementation; this local summary is not a replacement for current SDK types.
- Build a source-backed display; never invent counts, prices, ratings, availability, or approval status.
- Do not assume its event or shape works with CopilotKit standardUI or an app until explicitly registered and tested.
- Prefer existing MDE/iPix native components if they already own working actions and data.
