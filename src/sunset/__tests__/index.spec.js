import Aurora from '..'
import VarAurora from '../Aurora'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'

test('test aurora plugin', () => {
  const app = createApp({}).use(Aurora)
  expect(app.component(Aurora.name)).toBeTruthy()
})
