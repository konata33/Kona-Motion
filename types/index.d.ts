import type { App } from 'vue'

export const version: string
export const install: (app: App) => void

export * from './basicComponent'
export * from './button'
export * from './styleVars'

declare module 'vue' {
  export interface GlobalComponents {
    VarBasicComponent: typeof import('kona-motion')['_BasicComponentComponent']
    VarButton: typeof import('kona-motion')['_ButtonComponent']
    VarStyleVars: typeof import('kona-motion')['_StyleVarsComponent']
  }

  export interface ComponentCustomProperties {
    
  }
}
