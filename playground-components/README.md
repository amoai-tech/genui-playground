# A2UI Playground — 52 extra components

**Purpose:** Reference the 52 *Playground-specific* components (shadcn/ui, chart, map and domain components). These are NOT part of the official 69-component CopilotKit `standardUI` catalog.

**Sources:** [Live catalog](https://a2ui.open.bot/components) · [Playground source](https://github.com/amoai-tech/genui-playground/tree/main/src/a2ui/catalog/definitions) · [Official 69 references](../copilotkit-components/README.md).

**Do not automatically expose these extras in MDE or iPix.** Before adoption, check installed SDK/version and existing native component, register explicitly in the application's versioned catalog, allowlist by page Surface, hydrate IDs from authorized data, and validate any action server-side.

| Group | Component | Playground docs | Local definition |
| --- | --- | --- | --- |
| Layout | [Section](https://a2ui.open.bot/components/Section) | [section.md](./section.md) | [source](../src/a2ui/catalog/definitions/layout.ts) |
| Layout | [Accordion](https://a2ui.open.bot/components/Accordion) | [accordion.md](./accordion.md) | [source](../src/a2ui/catalog/definitions/layout.ts) |
| Content | [Heading](https://a2ui.open.bot/components/Heading) | [heading.md](./heading.md) | [source](../src/a2ui/catalog/definitions/content.ts) |
| Content | [CodeBlock](https://a2ui.open.bot/components/CodeBlock) | [code-block.md](./code-block.md) | [source](../src/a2ui/catalog/definitions/content.ts) |
| Content | [Quote](https://a2ui.open.bot/components/Quote) | [quote.md](./quote.md) | [source](../src/a2ui/catalog/definitions/content.ts) |
| Content | [ImageGallery](https://a2ui.open.bot/components/ImageGallery) | [image-gallery.md](./image-gallery.md) | [source](../src/a2ui/catalog/definitions/content.ts) |
| Content | [VideoEmbed](https://a2ui.open.bot/components/VideoEmbed) | [video-embed.md](./video-embed.md) | [source](../src/a2ui/catalog/definitions/content.ts) |
| Content | [Kbd](https://a2ui.open.bot/components/Kbd) | [kbd.md](./kbd.md) | [source](../src/a2ui/catalog/definitions/content.ts) |
| Data display | [Stat](https://a2ui.open.bot/components/Stat) | [stat.md](./stat.md) | [source](../src/a2ui/catalog/definitions/data.ts) |
| Data display | [StatGroup](https://a2ui.open.bot/components/StatGroup) | [stat-group.md](./stat-group.md) | [source](../src/a2ui/catalog/definitions/data.ts) |
| Data display | [Avatar](https://a2ui.open.bot/components/Avatar) | [avatar.md](./avatar.md) | [source](../src/a2ui/catalog/definitions/data.ts) |
| Data display | [AvatarGroup](https://a2ui.open.bot/components/AvatarGroup) | [avatar-group.md](./avatar-group.md) | [source](../src/a2ui/catalog/definitions/data.ts) |
| Data display | [DataTable](https://a2ui.open.bot/components/DataTable) | [data-table.md](./data-table.md) | [source](../src/a2ui/catalog/definitions/data.ts) |
| Data display | [KeyValueList](https://a2ui.open.bot/components/KeyValueList) | [key-value-list.md](./key-value-list.md) | [source](../src/a2ui/catalog/definitions/data.ts) |
| Data display | [Timeline](https://a2ui.open.bot/components/Timeline) | [timeline.md](./timeline.md) | [source](../src/a2ui/catalog/definitions/data.ts) |
| Data display | [Progress](https://a2ui.open.bot/components/Progress) | [progress.md](./progress.md) | [source](../src/a2ui/catalog/definitions/data.ts) |
| Data display | [RadialProgress](https://a2ui.open.bot/components/RadialProgress) | [radial-progress.md](./radial-progress.md) | [source](../src/a2ui/catalog/definitions/data.ts) |
| Data display | [Rating](https://a2ui.open.bot/components/Rating) | [rating.md](./rating.md) | [source](../src/a2ui/catalog/definitions/data.ts) |
| Data display | [TagList](https://a2ui.open.bot/components/TagList) | [tag-list.md](./tag-list.md) | [source](../src/a2ui/catalog/definitions/data.ts) |
| Data display | [Agenda](https://a2ui.open.bot/components/Agenda) | [agenda.md](./agenda.md) | [source](../src/a2ui/catalog/definitions/data.ts) |
| Data display | [ComparisonTable](https://a2ui.open.bot/components/ComparisonTable) | [comparison-table.md](./comparison-table.md) | [source](../src/a2ui/catalog/definitions/data.ts) |
| Charts | [LineChart](https://a2ui.open.bot/components/LineChart) | [line-chart.md](./line-chart.md) | [source](../src/a2ui/catalog/definitions/charts.ts) |
| Charts | [AreaChart](https://a2ui.open.bot/components/AreaChart) | [area-chart.md](./area-chart.md) | [source](../src/a2ui/catalog/definitions/charts.ts) |
| Charts | [BarChart](https://a2ui.open.bot/components/BarChart) | [bar-chart.md](./bar-chart.md) | [source](../src/a2ui/catalog/definitions/charts.ts) |
| Charts | [PieChart](https://a2ui.open.bot/components/PieChart) | [pie-chart.md](./pie-chart.md) | [source](../src/a2ui/catalog/definitions/charts.ts) |
| Charts | [ScatterChart](https://a2ui.open.bot/components/ScatterChart) | [scatter-chart.md](./scatter-chart.md) | [source](../src/a2ui/catalog/definitions/charts.ts) |
| Charts | [Heatmap](https://a2ui.open.bot/components/Heatmap) | [heatmap.md](./heatmap.md) | [source](../src/a2ui/catalog/definitions/charts.ts) |
| Charts | [Sparkline](https://a2ui.open.bot/components/Sparkline) | [sparkline.md](./sparkline.md) | [source](../src/a2ui/catalog/definitions/charts.ts) |
| Charts | [RadarChart](https://a2ui.open.bot/components/RadarChart) | [radar-chart.md](./radar-chart.md) | [source](../src/a2ui/catalog/definitions/charts.ts) |
| Charts | [CandlestickChart](https://a2ui.open.bot/components/CandlestickChart) | [candlestick-chart.md](./candlestick-chart.md) | [source](../src/a2ui/catalog/definitions/charts.ts) |
| Charts | [Treemap](https://a2ui.open.bot/components/Treemap) | [treemap.md](./treemap.md) | [source](../src/a2ui/catalog/definitions/charts.ts) |
| Charts | [SankeyChart](https://a2ui.open.bot/components/SankeyChart) | [sankey-chart.md](./sankey-chart.md) | [source](../src/a2ui/catalog/definitions/charts.ts) |
| Charts | [Gauge](https://a2ui.open.bot/components/Gauge) | [gauge.md](./gauge.md) | [source](../src/a2ui/catalog/definitions/charts.ts) |
| Maps | [MapView](https://a2ui.open.bot/components/MapView) | [map-view.md](./map-view.md) | [source](../src/a2ui/catalog/definitions/maps.ts) |
| Maps | [RouteMap](https://a2ui.open.bot/components/RouteMap) | [route-map.md](./route-map.md) | [source](../src/a2ui/catalog/definitions/maps.ts) |
| Maps | [LocationCard](https://a2ui.open.bot/components/LocationCard) | [location-card.md](./location-card.md) | [source](../src/a2ui/catalog/definitions/maps.ts) |
| Maps | [PlaceList](https://a2ui.open.bot/components/PlaceList) | [place-list.md](./place-list.md) | [source](../src/a2ui/catalog/definitions/maps.ts) |
| Inputs | [Combobox](https://a2ui.open.bot/components/Combobox) | [combobox.md](./combobox.md) | [source](../src/a2ui/catalog/definitions/inputs.ts) |
| Inputs | [Switch](https://a2ui.open.bot/components/Switch) | [switch.md](./switch.md) | [source](../src/a2ui/catalog/definitions/inputs.ts) |
| Inputs | [DatePicker](https://a2ui.open.bot/components/DatePicker) | [date-picker.md](./date-picker.md) | [source](../src/a2ui/catalog/definitions/inputs.ts) |
| Inputs | [ButtonGroup](https://a2ui.open.bot/components/ButtonGroup) | [button-group.md](./button-group.md) | [source](../src/a2ui/catalog/definitions/inputs.ts) |
| Inputs | [ChipSelect](https://a2ui.open.bot/components/ChipSelect) | [chip-select.md](./chip-select.md) | [source](../src/a2ui/catalog/definitions/inputs.ts) |
| Feedback | [Alert](https://a2ui.open.bot/components/Alert) | [alert.md](./alert.md) | [source](../src/a2ui/catalog/definitions/feedback.ts) |
| Feedback | [Callout](https://a2ui.open.bot/components/Callout) | [callout.md](./callout.md) | [source](../src/a2ui/catalog/definitions/feedback.ts) |
| Feedback | [Skeleton](https://a2ui.open.bot/components/Skeleton) | [skeleton.md](./skeleton.md) | [source](../src/a2ui/catalog/definitions/feedback.ts) |
| Feedback | [EmptyState](https://a2ui.open.bot/components/EmptyState) | [empty-state.md](./empty-state.md) | [source](../src/a2ui/catalog/definitions/feedback.ts) |
| Domain | [WeatherCard](https://a2ui.open.bot/components/WeatherCard) | [weather-card.md](./weather-card.md) | [source](../src/a2ui/catalog/definitions/domain.ts) |
| Domain | [ProfileCard](https://a2ui.open.bot/components/ProfileCard) | [profile-card.md](./profile-card.md) | [source](../src/a2ui/catalog/definitions/domain.ts) |
| Domain | [ReceiptCard](https://a2ui.open.bot/components/ReceiptCard) | [receipt-card.md](./receipt-card.md) | [source](../src/a2ui/catalog/definitions/domain.ts) |
| Domain | [EventCard](https://a2ui.open.bot/components/EventCard) | [event-card.md](./event-card.md) | [source](../src/a2ui/catalog/definitions/domain.ts) |
| Domain | [StockTicker](https://a2ui.open.bot/components/StockTicker) | [stock-ticker.md](./stock-ticker.md) | [source](../src/a2ui/catalog/definitions/domain.ts) |
| Domain | [RecipeCard](https://a2ui.open.bot/components/RecipeCard) | [recipe-card.md](./recipe-card.md) | [source](../src/a2ui/catalog/definitions/domain.ts) |

## Priority for iPix and MDE

| Priority | Components | Example use |
| --- | --- | --- |
| P0 | ComparisonTable, DataTable, StatGroup, Agenda, ImageGallery, PlaceList, ChipSelect, EmptyState | Rental/venue comparison, broker insights, itinerary, product/shoot imagery, filters |
| P1 | Timeline, KeyValueList, DatePicker, Alert, Callout, LineChart, BarChart, Rating, RouteMap, LocationCard, EventCard, ProfileCard, ReceiptCard | Production plans, calendars, analytics, sourced event tickets |
| P2 | Remaining extras | Only when a real user journey, trusted data and native feature gap justify it |

**Macros are different:** the [three Playground macros](../playground-macros/README.md) expand server-side into standard components and are not equivalent to these 52 custom renderers.
