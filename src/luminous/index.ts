import luminous from './Luminous'
import { withInstall } from '../utils/components'
import { props as luminousProps } from './props'

withInstall(luminous)

export { luminousProps  }

export const _LuminousComponent = luminous

export default luminous
