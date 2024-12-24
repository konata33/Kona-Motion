# Luminous 发光效果

## 介绍

一个为图标或 Logo 添加动态发光效果的组件。它会自动提取图像中的主要颜色来创建匹配的发光效果。

## 基础用法

```html
<Luminous 
  logo="https://example.com/logo.png"
  width="200"
  height="200"
/>
```

## API

### Props 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `logo` | 要显示的图片地址，支持 SVG、远程 URL 或本地图片路径 | _string_ | - |
| `width` | 组件宽度 | _number \| string_ | `200` |
| `height` | 组件高度 | _number \| string_ | `200` |
| `animated` | 是否启用动画效果 | _boolean_ | `true` |

## 代码示例

```vue
import Luminous from '../example/index'
```
