# Card

## Introduce

A card component designed for displaying personal profiles and information. The component automatically generates a matching color scheme based on the user's avatar.

## Basic Usage

```html
<Card title="CREATOR" name="Konata" icon="https://avatars.githubusercontent.com/u/24601590?v=4" />
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `title` | Card title text | _string_ | - |
| `name` | Display name | _string_ | - |
| `icon` | Avatar image URL. Supports SVG, external URL or local image path | _string_ | - |

## Example

```vue
import Card from '../example/index'
```
