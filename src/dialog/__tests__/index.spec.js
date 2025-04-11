import Dialog from '..'
import VarDialog from '../Dialog'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'

test('test dialog plugin', () => {
  const app = createApp({}).use(Dialog)
  expect(app.component(Dialog.name)).toBeTruthy()
})
