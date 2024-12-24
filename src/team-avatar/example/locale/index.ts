// @ts-nocheck
// lib
import _zhCN from './zh-CN'
import _enCN from './en-US'
import { useLocale, add as _add, use as _use } from '.'

const { add, use: exampleUse, t, merge } = useLocale()

const use = (lang: string) => {
  _use(lang)
  exampleUse(lang)
}

export { add, t, merge, use }

// lib
_add('zh-CN', _zhCN)
_add('en-US', _enCN)
