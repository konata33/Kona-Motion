import { defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import './sunset.less'

const { name, n } = createNamespace('sunset')

export default defineComponent({
  name,
  props: {
    width: {
      type: [Number, String],
      default: '100%'
    },
    height: {
      type: [Number, String],
      default: '100%'
    },
    image: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    return () => (
      <div 
        class={n()}
        style={{
          width: typeof props.width === 'number' ? `${props.width}px` : props.width,
          height: typeof props.height === 'number' ? `${props.height}px` : props.height,
        }}
      >
        <div class={n('glow')} />
        {props.image && (
          <img 
            src={props.image}
            class={n('background')}
          />
        )}
      </div>
    )
  }
})
