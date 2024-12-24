import IconButton from '..'
import VarIconButton from '../IconButton'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'

test('test icon-button plugin', () => {
  const app = createApp({}).use(IconButton)
  expect(app.component(IconButton.name)).toBeTruthy()
})
