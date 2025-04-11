import { defineConfig } from '@varlet/cli'

export default defineConfig({
  name: "Kona-Motion",
  title: "Kona-Motion",
  logo: './logo.svg',
  useMobile: false,
  defaultLanguage: 'en-US',
  pc: {
    header: {
      darkMode: null,
      themes: null,
      changelog: null,
      i18n: {
        'zh-CN': '中文',
        'en-US': 'English'
      },
      playground: null,
      versions: null,
    },
    menu: [
      {
        text: {
          'zh-CN': '基本介绍',
          'en-US': 'introduce'
        },
        doc: 'home',
        type: 3,
      },
      {
        text: {
          'zh-CN': '基础组件',
          'en-US': 'Basic',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': '卡片',
          'en-US': 'Card',
        },
        doc: 'card',
        type: 2,
      },
      {
        text: {
          'zh-CN': '团队头像',
          'en-US': 'Team Avatar',
        },
        doc: 'team-avatar',
        type: 2,
      },
      {
        text: {
          'zh-CN': '光效',
          'en-US': 'Luminous',
        },
        doc: 'luminous',
        type: 2,
      },
      {
        text: {
          'zh-CN': '对话框',
          'en-US': 'Dialog',
        },
        doc: 'dialog',
      }
    ],
  },
})
