import type { PropType } from 'vue'
import { Component, defineComponent, onMounted, ref } from 'vue'
import { createNamespace } from '../utils/components'
import { extractColors } from 'extract-colors'
import './card.less'

const { name } = createNamespace('card')

type IconType = string | Component

export default defineComponent({
  name,
  props: {
    title: {
      type: String,
      default: 'CREATOR'
    },
    name: {
      type: String,
    },
    icon: {
      type: [String, Object] as PropType<IconType>,
    }
  },
  setup(props) {
    const waveColors = ref<string[]>([])

    const extractImageColors = async (src: string) => {
      try {
        const colors = await extractColors(src, {
          pixels: 500,        
          distance: 0.2,         
          saturationDistance: 0.2,
          lightnessDistance: 0.2,
          crossOrigin: 'anonymous',
        })

        // 按亮度倒序排列（从深到浅）
        waveColors.value = colors
          .sort((a, b) => a.lightness - b.lightness)
          .slice(0, 4)
          .map(color => 
            `rgba(${color.red}, ${color.green}, ${color.blue}, 0.8)`
          )
      } catch (error) {
        waveColors.value = [
          'rgba(0, 0, 0, 0.5)',
          'rgba(75, 76, 80, 0.5)',
          'rgba(120, 128, 138, 0.5)',
          'rgba(0, 0, 0, 0.5)'
        ]
      }
    }

    const renderIcon = () => {
      if (typeof props.icon === 'string') {
        if (props.icon.trim().startsWith('<svg')) {
          return <div class="waveCard-icon" innerHTML={props.icon}></div>
        }
        if (props.icon.startsWith('http') || props.icon.match(/\.(jpg|jpeg|png|gif)$/i)) {
          return (
            <div class="waveCard-icon">
              <img 
                src={props.icon} 
                alt="user icon" 
                crossorigin="anonymous"
                onLoad={() => extractImageColors(props.icon as string)}
              />
            </div>
          )
        }
        return <div class="waveCard-icon">{props.icon}</div>
      }
      return <div class="waveCard-icon">{props.icon}</div>
    }

    return () => (
      <div class="waveCard">
        <div class="waveCard-background">
      {waveColors.value.map((color, index) => (
        <div
          key={index}
          class="wave"
          style={{
            background: `linear-gradient(45deg, ${color} 0%, ${color} 100%)`,
            animationDelay: `${index * -2}s`,
            opacity: 0.6 - index * 0.1
          }}
        />
      ))}
    </div>
        <div class="waveCard-content">
          {renderIcon()}
          <div class="waveCard-title">{props.title}</div>
          <div class="waveCard-name">{props.name}</div>
        </div>
      </div>
    )
  }
})
