# Sunset 日落动画

## 介绍

一个具有交互性的日落/夜晚场景切换动画组件。通过点击可以在日落和夜晚场景之间平滑过渡,并带有流畅的水面反射效果。

## 基础用法

```html
<Sunset :width="300" :height="300" />
<Sunset :width="300" :height="300" theme="dark" />
```

## API

### Props 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 组件宽度 | _number \| string_ | `'100%'` |
| `height` | 组件高度 | _number \| string_ | `'100%'` |
| `theme` | 主题模式,可选值为 `light` `dark` | _string_ | `'light'` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击组件时触发场景切换 | `event: Event` |

## 代码示例

```vue
import Sunset from '../example/index'
```


## 注意事项

- 点击太阳/月亮可以触发场景切换动画
- 动画过程中不响应点击事件
- 支持响应式布局,可以通过 width 和 height 控制大小
