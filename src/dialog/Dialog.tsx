import { AnimatePresence, motion } from 'motion-v'
import { defineComponent, PropType } from 'vue'
import { createNamespace } from '../utils/components'
import './dialog.less'

const { name } = createNamespace('card')

export default defineComponent({
  name,
  props: {
    visible: Boolean,
    title: String,
    content: String,
    onClose: Function as PropType<() => void>,
    width: {
      type: [String, Number],
      default: '40%'
    },
    height: {
      type: [String, Number],
      default: 'auto'
    }
  },
  setup(props, { slots }) {
    const springTransition = {
      type: 'spring', 
      damping: 10,
      stiffness: 125,
      mass: 1.4,
      velocity: 2.8,
      bounce: 0.5
    }

    const exitTransition = {
      type: 'spring',
      damping: 15,
      stiffness: 80,
      mass: 1.2,
      velocity: -1.5,
      restDelta: 0.5,
      duration: 0.5
    }
    
    const getContentStyle = () => ({
      width: typeof props.width === 'number' ? `${props.width}px` : props.width,
      height: typeof props.height === 'number' ? `${props.height}px` : props.height,
    })

    const handleClose = () => {
      if (props.onClose) props.onClose();
    }

    return () => (
      <div class="dialog-wrapper">
        <AnimatePresence>
          {props.visible && (
            <motion.div
              key="dialog-container"
              class="dialog-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ 
                y: '100%', 
                opacity: 0, 
                scale: 0.95,
                rotate: 1,
                transition: exitTransition
              }}
            >
              <div 
                class="dialog-overlay"
                onClick={handleClose}
              />
              
              <motion.div
                key="content"
                class="dialog-content"
                style={getContentStyle()}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: springTransition }}
              >
                <div class="dialog-body">
                  {slots.default ? slots.default() : props.content}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }
})
