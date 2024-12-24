import { defineComponent, PropType, ref, onMounted,computed } from 'vue'
import { createNamespace } from '../utils/components'
import { extractColors } from 'extract-colors'
import './teamAvatar.less'

const { name, n } = createNamespace('team-avatar')

export interface Member {
  avatar: string;
  url?: string;
}

export interface GitHubContributor {
  avatar_url: string;
  contributions: number;
  html_url: string;
}

export interface GitHubRepo {
  organization: {
    avatar_url: string;
  };
}

export default defineComponent({
  name,
  props: {
    logo: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: 'var(--team-avatar-size)'
    },
    height: {
      type: [String, Number],
      default: 'var(--team-avatar-size)'
    },
    members: {
      type: Array as PropType<Member[]>,
      default: () => []
    },
    repo: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const allMembers = ref<Member[]>([])
    const glowColors = ref<string[]>([])
    const logoUrl = ref(props.logo)
    const isLoading = ref(false)

    const fetchContributors = async (repo: string) => {
      if (isLoading.value) return
      isLoading.value = true
      // @ts-ignore
      const auth = btoa(import.meta.env.GITHUB_TOKEN)
      try {
        const [owner, repoName] = repo.split('/')
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repoName}/contributors?per_page=99`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              'Authorization': `Basic ${auth}`
            }
          }
        )
        if (!response.ok) throw new Error('Failed to fetch contributors')
        
        const contributors: GitHubContributor[] = await response.json()
        return contributors
          .filter(c => c.avatar_url)
          .map(c => ({
            avatar: c.avatar_url,
            url: c.html_url
          }))
      } catch (error) {
        console.warn('Failed to fetch GitHub contributors:', error)
        return []
      } finally {
        isLoading.value = false
      }
    }

    const fetchRepoInfo = async (repo: string) => {
      try {
        const [owner, repoName] = repo.split('/')
        // @ts-ignore
        const auth = btoa(import.meta.env.GITHUB_TOKEN)
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repoName}`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              'Authorization': `Basic ${auth}`
            }
          }
        )
        if (!response.ok) throw new Error('Failed to fetch repo info')
        
        const repoInfo: GitHubRepo = await response.json()
        return repoInfo.organization?.avatar_url
      } catch (error) {
        console.warn('Failed to fetch repo logo:', error)
        return null
      }
    }

    onMounted(async () => {
      if (props.repo) {
        const [contributors, repoLogo] = await Promise.all([
          fetchContributors(props.repo),
          props.logo ? Promise.resolve(props.logo) : fetchRepoInfo(props.repo)
        ])
        allMembers.value = contributors || []
        logoUrl.value = props.logo || repoLogo || 'https://github.com/github.png'
      } else {
        allMembers.value = props.members
        logoUrl.value = props.logo
      }
    })

    const extractLogoColors = async (src: string) => {
      try {
        const colors = await extractColors(src, {
          pixels: 500,
          distance: 0.2,
          saturationDistance: 0.2,
          lightnessDistance: 0.2,
        })

        glowColors.value = colors
          .sort((a: { lightness: number }, b: { lightness: number }) => b.lightness - a.lightness)
          .slice(0, 2)
          .map((color: { red: any; green: any; blue: any }) => 
            `rgba(${color.red}, ${color.green}, ${color.blue}, 0.4)`
          )
      } catch (error) {
        glowColors.value = [
          'rgba(168, 85, 247, 0.4)',
          'rgba(139, 92, 246, 0.4)'
        ]
      }
    }

    const sizeStyle = computed(() => {
      const width = typeof props.width === 'number' ? `${props.width}px` : props.width
      const height = typeof props.height === 'number' ? `${props.height}px` : props.height
      return { width, height }
    })

    const getMemberSize = (count: number) => {
      const containerSize = Math.min(
        typeof props.width === 'number' ? props.width : parseFloat(props.width) * 16,
        typeof props.height === 'number' ? props.height : parseFloat(props.height) * 16
      ) * 0.8

      const itemsPerRow = Math.ceil(Math.sqrt(count))
      const size = Math.floor((containerSize / itemsPerRow) * 0.8)
      
      const minSize = 1.5
      const maxSize = 2.5
      return `${Math.min(Math.max(size / 16, minSize), maxSize)}rem`
    }

    const getGapSize = (count: number) => {
      const size = parseFloat(getMemberSize(count))
      return `${Math.max(size * 0.2, 0.25)}rem`
    }

    return () => (
      <div class={n()} style={sizeStyle.value}>
        <div 
          class={n('irregular-glow')} 
          style={{
            '--glow-color': glowColors.value[0],
            '--glow-color-secondary': glowColors.value[1] || glowColors.value[0]
          }}
        />
        <div class={n('glow')} />
        <div 
          class={n('members-container')}
          style={{
            '--member-size': getMemberSize(allMembers.value.length),
            '--gap-size': getGapSize(allMembers.value.length)
          }}
        >
          {allMembers.value.map((member, index) => (
            <a 
              key={index}
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              class={n('member')}
            >
              <img src={member.avatar} alt="member" />
            </a>
          ))}
        </div>
        <div class={n('main')}>
          <img 
            src={logoUrl.value} 
            alt="logo" 
            crossorigin="anonymous"
            onLoad={() => extractLogoColors(logoUrl.value)}
          />
        </div>
      </div>
    )
  }
})
