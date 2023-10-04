import { defineConfig } from 'vitepress'
import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: "Inbox Startup",
  description: "Helping Startups during the chaotic zero stage.",

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: false,

  themeConfig: {
    search: { provider: 'local' },

    sidebar: [
      {
        text: 'Idea',
        link: '/idea/idea',
        collapsed: false,
        items: [
          { text: 'Co-Founders', link: '/idea/co-founders' },
          { text: 'Name', link: '/idea/name' },
          { text: 'Prepare', link: '/idea/prepare' },
          { text: 'Problem', link: '/idea/problem' },
        ],
      },
      {
        text: 'Build',
        link: '/build/build',
        collapsed: false,
        items: [
          { text: 'Assets', link: '/build/assets' },
          { text: 'Automation', link: '/build/automation' },
          { text: 'Brand', link: '/build/brand' },
          { text: 'Code (No/Low)', link: '/build/code' },
          { text: 'Data', link: '/build/data' },
          { text: 'Product', link: '/build/product' },
          { text: 'Security', link: '/build/security' },
          { text: 'Services', link: '/build/services' },
          { text: 'Templates', link: '/build/templates' },
        ],
      },
      {
        text: 'Finance',
        link: '/finance/finance',
        collapsed: false,
        items: [
          { text: 'Fund Raising', link: '/finance/fundraising' },
          { text: 'Investors', link: '/finance/investors' },
          { text: 'Pitch', link: '/finance/pitch' },
        ],
      },
      {
        text: 'Sell',
        link: '/sell/sell',
        collapsed: false,
        items: [
          { text: 'Founder Sale', link: '/sell/founding-sales' },
        ],
      },
      {
        text: 'Market',
        link: '/market/market',
        collapsed: false,
        items: [
          { text: 'Branding', link: '/market/branding' },
          { text: 'Content', link: '/market/content' },
          { text: 'Email', link: '/market/email' },
          { text: 'Press / PR', link: '/market/press-pr' },
        ],
      },
      {
        text: 'Enhance',
        link: '/enhance/enhance',
        collapsed: false,
        items: [
          { text: 'Accelerators', link: '/enhance/accelerators' },
          { text: 'Perks', link: '/enhance/perks' },
        ],
      },
      {
        text: 'Operate',
        link: '/operate/operate',
        collapsed: false,
        items: [
          { text: 'Administration', link: '/operate/administration' },
          { text: 'Analytics', link: '/operate/analytics' },
          { text: 'Culture', link: '/operate/culture' },
          { text: 'HR', link: '/operate/hr' },
          { text: 'Incorporation', link: '/operate/incorporation' },
          { text: 'Jobs', link: '/operate/jobs' },
          { text: 'Legal', link: '/operate/legal' },
          { text: 'Management', link: '/operate/management' },
          { text: 'North Star', link: '/operate/north-star' },
          { text: 'Remote', link: '/operate/remote' },
          { text: 'Travel & Stay', link: '/operate/travel-stay' },
          { text: 'Updates', link: '/operate/updates' },
        ],
      },
      {
        text: 'Learn',
        link: '/learn/learn',
      },
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/inboxstartup/docs' },
      { icon: 'twitter', link: 'https://twitter.com/InboxStartup' },
    ],

    footer: {
      message: 'Released under No License.',
      copyright: 'Copyright © 2019-present'
    },

  },
})
