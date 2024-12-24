# Luminous

## Introduce

A component that adds a dynamic glowing effect to logos or images. It automatically extracts the dominant color from the image to create a matching glow effect.

## Basic Usage

```html
<Luminous 
  logo="https://example.com/logo.png"
  width="200"
  height="200"
/>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `logo` | Image URL to display. Supports SVG, external URL or local image path | _string_ | - |
| `width` | Component width | _number \| string_ | `200` |
| `height` | Component height | _number \| string_ | `200` |
| `animated` | Whether to enable animation effect | _boolean_ | `true` |

## Example

```vue
import Luminous from '../example/index'
```
