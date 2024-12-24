import TeamAvatar from './TeamAvatar'
import { withInstall } from '../utils/components'
import { props as teamAvatarProps } from './props'

withInstall(TeamAvatar)

export { teamAvatarProps  }

export const _TeamAvatarComponent = TeamAvatar

export default TeamAvatar
