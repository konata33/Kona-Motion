# Sunset Animation

## Introduction

An interactive sunset/night scene transition animation component. Smoothly transitions between sunset and night scenes with fluid water reflection effects when clicked.

## Basic Usage
```html
<!-- Basic usage -->
<Sunset :width="300" :height="300" />
<!-- Dark theme -->
<Sunset :width="300" :height="300" theme="dark" />
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `width` | Component width | _number \| string_ | `'100%'` |
| `height` | Component height | _number \| string_ | `'100%'` |
| `theme` | Theme mode, can be `light` or `dark` | _string_ | `'light'` |

### Events

| Event | Description | Parameters |
| --- | --- | --- |
| `click` | Triggered when component is clicked to switch scenes | `event: Event` |

## Example
```vue
import Sunset from '../example/index'
```

## Notes

- Click the sun/moon to trigger scene transition animation
- Click events are not responsive during animation
- Supports responsive layout, size can be controlled via width and height
