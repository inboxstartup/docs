import { defineConfig } from 'vitepress'
import { defineConfig, type DefaultTheme } from 'vitepress'

import { generateSidebar } from 'vitepress-sidebar'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Inbox Startup",
  description: "Helping Startups during the chaotic zero stage.",

  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  sitemap: { hostname: 'https://docs.inboxstartup.com' },

  srcExclude: [ 'README.md', 'tmp' ],

  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: { src: '/inboxstartup-logo.svg' },
    siteTitle: false,

    search: {
      provider: 'algolia',
      options: {
        appId: 'JVWSSBLBLD',
        apiKey: '6a4c2303312b4c08d52273322dbda9dd',
        indexName: 'inboxstartup'
      }
    },

    lastUpdated: {
      text: 'Edited',
      formatOptions: {
        dateStyle: 'medium',
      },
    },

    nav: [
      { text: 'Subscribe', link: 'https://inboxstartup.com' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/inboxstartup/docs' },
      { icon: 'twitter', link: 'https://twitter.com/InboxStartup' },
    ],

    // https://github.com/jooy2/vitepress-sidebar
    sidebar: generateSidebar({
      // documentRootPath: '/',
      // scanStartPath: null,
      // resolvePath: null,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile  : true,
      hyphenToSpace: true,
      underscoreToSpace: true,
      capitalizeFirst: true,
      capitalizeEachWords: true,
      collapsed: true,
      // collapseDepth: 2,
      // sortMenusByName: false,
      // sortMenusByFrontmatterOrder: true,
      // sortMenusOrderByDescending: false,
      // sortMenusOrderNumerically: false,
      manualSortFileNameByPriority: [ 'idea', 'build', 'finance', 'sell', 'market', 'enhance', 'operate', 'learn' ],
      excludeFiles: ['README.md'],
      excludeFolders: ['node_modules', 'public', 'tmp'],
      // includeDotFiles: false,
      // includeRootIndexFile: false,
      // includeFolderIndexFile: false,
      includeEmptyFolder: true,
      // rootGroupText: 'Contents',
      // rootGroupLink: 'https://github.com/jooy2',
      // rootGroupCollapsed: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      debugPrint: false,
    }),

  }
})