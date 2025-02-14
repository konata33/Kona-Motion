import { defineComponent, ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
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
    theme: {
      type: String,
      default: 'light',  
      validator: (value: string) => ['light', 'dark'].includes(value)
    }
  },

  setup(props) {
    const isNight = ref(props.theme === 'dark');
    const isAnimating = ref(false)
    const componentRef = ref<HTMLElement | null>(null)

    const toggleTime = (e: MouseEvent) => {
      if (isAnimating.value) return;
      
      const target = e.target as HTMLElement;
      
      if (
        target.classList.contains(n('sun')) && !isNight.value ||
        target.classList.contains(n('moon')) && isNight.value
      ) {
        isAnimating.value = true;
        isNight.value = !isNight.value;
        
        setTimeout(() => {
          isAnimating.value = false;
        }, 2000);
      }
    };

    watch(() => props.theme, (newTheme) => {
      if (!isAnimating.value) {
        isNight.value = newTheme === 'dark';
      }
    });

    const reflectionDistance = computed(() => {
      const height = typeof props.height === 'number' ? props.height : parseInt(props.height, 10);
      const width = typeof props.width === 'number' ? props.width : parseInt(props.width, 10);
      
      const aspectRatio = width / height;
 
      let distance;
      if (aspectRatio >= 2) { 
        distance = Math.min(height * 2.4, 500);
      } else if (aspectRatio >= 1) {
        distance = Math.min(height * 2.6,1500);
      } else {
        distance = Math.min(height * 2.6, 1500);
      }
      
      return `--reflection-distance: ${distance}%;`;
    });

    return () => (
      <div 
        ref={componentRef}
        class={[n(), isNight.value ? n('--night') : '']}
        style={[
          {
            width: typeof props.width === 'number' ? `${props.width}px` : props.width,
            height: typeof props.height === 'number' ? `${props.height}px` : props.height,
          },
          reflectionDistance.value
        ]}
        onClick={toggleTime}
      >
        <div class={n('glow')}>
          <div class={n('glow-night-overlay')} />
        </div>
        <div class={n('sun')} />
        <div class={n('moon')} />
      </div>
    )
  }
})
