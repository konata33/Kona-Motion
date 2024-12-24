import Card from './Card'
import { withInstall } from '../utils/components'
import { props as cardProps } from './props'

withInstall(Card)

export { cardProps  }

export const _CardComponent = Card

export default Card
