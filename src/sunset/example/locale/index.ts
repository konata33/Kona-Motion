// @ts-nocheck
// lib
import { add as _add, use as _use, useLocale } from '../../../locale'
import _enCN from '../../../locale/en-US'
import _zhCN from '../../../locale/zh-CN'

const { add, use: exampleUse, t, merge } = useLocale()

const use = (lang: string) => {
  _use(lang)
  exampleUse(lang)
}

export { add, merge, t, use }

// lib
_add('zh-CN', _zhCN)
_add('en-US', _enCN)
