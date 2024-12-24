import { defineComponent, ref, onMounted } from 'vue'
import { createNamespace } from '../utils/components'
import { extractColors } from 'extract-colors'

import "./luminous.less"

const { name, n } = createNamespace('luminous')

export default defineComponent({
  name,
  props: {
    width: {
      type: [Number, String],
      default: 200
    },
    height: {
      type: [Number, String],
      default: 200
    },
    logo: {
      type: String,
      required: true
    },
    animated: {
      type: Boolean,
      default: true
    }
  },

  setup(props) {
    const glowColor = ref('#6366f1') 

    const extractLogoColors = async (src: string) => {
      try {
        const colors = await extractColors(src, {
          pixels: 500,
          distance: 0.2,
          saturationDistance: 0.2,
          lightnessDistance: 0.2,
          crossOrigin: 'anonymous',
        })

        const dominantColor = colors[0]
        glowColor.value = `${dominantColor.red}, ${dominantColor.green}, ${dominantColor.blue}`
      } catch (error) {
        console.warn('Failed to extract colors:', error)
        glowColor.value = '99, 102, 241' 
      }
    }

    onMounted(() => {
      extractLogoColors(props.logo)
    })

    const getGlowStyle = () => {
      const baseStyle: Record<string, any> = {
        width: '100%',
        height: '100%',
      }

      if (!props.animated) {
        baseStyle.filter = `
          drop-shadow(0 0 8px rgba(${glowColor.value}, 0.3))
          drop-shadow(0 0 12px rgba(${glowColor.value}, 0.4))
          drop-shadow(0 0 16px rgba(${glowColor.value}, 0.5))
        `
      }

      return baseStyle
    }

    return () => (
      <div 
        class={n()}
        style={{
          width: typeof props.width === 'number' ? `${props.width}px` : props.width,
          height: typeof props.height === 'number' ? `${props.height}px` : props.height,
          '--glow-color': glowColor.value
        }}
      >
        <img 
          class={[n('image'), { [n('image-animated')]: props.animated }]}
          src={props.logo} 
          alt="logo"
          crossorigin="anonymous"
          style={getGlowStyle()}
        />
      </div>
    )
  }
})
