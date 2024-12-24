import TeamAvatar from '..'
import VarTeamAvatar from '../TeamAvatar'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'

test('test team-avatar plugin', () => {
  const app = createApp({}).use(TeamAvatar)
  expect(app.component(TeamAvatar.name)).toBeTruthy()
})
