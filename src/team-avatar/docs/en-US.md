# TeamAvatar

## Introduce

An intelligent team display component that supports both GitHub auto-fetch and manual configuration modes. It can automatically fetch repository information and contributors, or fully customize team logo and member avatars.

## Basic Usage

```html
<!-- GitHub Mode: Auto-fetch Repository Info -->
<TeamAvatar :width="500" :height="500" repo="vuejs/core" />

<!-- Manual Mode: Custom Team Display -->
<TeamAvatar :width="500" :height="500" :logo="../logo.svg"
  :members="[
    { avatar: '../avatar1.jpg' },
    { avatar: '../avatar2.jpg' },
    { avatar: 'https://example.com/avatar3.jpg' }
  ]"
/>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `width` | Component width | _string \| number_ | '' |
| `height` | Component height | _string \| number_ | '' |
| `logo` | Team logo URL, supports svg, png, jpg, etc. | _string_ | `''` |
| `repo` | GitHub repository path (e.g., 'vuejs/core') | _string_ | `''` |
| `members` | Member list for manual mode | _Member[]_ | `[]` |

## Example

```vue
import TeamAvatar from '../example/index'
```

## Notes

- GitHub mode only requires repo address to auto-fetch all information
- Manual mode requires both logo and members data
- Logo takes precedence when both logo and repo exist
- Logo supports both local path and remote URL
- Maximum 99 contributors/members avatars displayed
