# 团队卡片

## 介绍

一个智能的团队展示组件，支持 GitHub 自动获取和手动配置两种模式。可自动获取仓库信息和贡献者，也可完全自定义团队 Logo 和成员头像。

## 基础用法

```html
<!-- GitHub 模式：自动获取仓库信息 -->
<TeamAvatar :width="500" :height="500" repo="vuejs/core" />

<!-- 手动模式：自定义团队展示 -->
<TeamAvatar :width="500" :height="500" :logo="../logo.svg"
  :members="[
    { avatar: '../avatar1.jpg' },
    { avatar: '../avatar2.jpg' },
    { avatar: 'https://example.com/avatar3.jpg' }
  ]"
/>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 组件宽度 | _string \| number_ | '' |
| `height` | 组件高度 | _string \| number_ | '' |
| `logo` | 团队 Logo 地址，支持 svg、png、jpg 等图片格式 | _string_ | `''` |
| `repo` | GitHub 仓库路径（如：'vuejs/core'） | _string_ | `''` |
| `members` | 手动模式下的成员列表 | _Member[]_ | `[]` |

## 代码演示

```vue
import TeamAvatar from '../example/index'
```

## 注意事项

- GitHub 模式下只需提供 repo 地址即可自动获取所有信息
- 手动模式下需要提供 logo 和 members 数据
- 同时存在 logo 和 repo 时优先使用 logo
- Logo 支持本地图片路径和远程图片 URL
- 最多显示 99 个贡献者/成员头像
