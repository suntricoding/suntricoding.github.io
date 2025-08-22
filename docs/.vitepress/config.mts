import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  title: "Jagong",
  description: "Modern Hugo Theme with Multiple Color Schemes - Built on TailwindCSS 4.",
  head: [
    ['link',{ rel: 'icon', href: '/hero.svg'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/hero.svg',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'FAQ', link: '/faq' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'About', link: '/introduction/about' },
          { text: 'Getting Started', link: '/introduction/get-started' },
          { text: 'Customization', link: '/introduction/modify' }
        ]
      },
      {
        text: 'Posts',
        items: [
          { text: 'Front Matter', link: '/posts/frontmatter' },
          { text: 'Images', link: '/posts/image' },
          { text: 'Enhanced Markdown', link: '/posts/markdown-enhanced' },
          { text: 'Shortcodes', link: '/posts/shortcodes' },
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'Site Config', link: '/configration/site' },
          { text: 'Navigation Menu', link: '/configration/menu' },
          { text: 'Color Schemes', link: '/configration/color-scheme' },
          { text: 'I18n', link: '/configration/i18n' },
          { text: 'Code Blocks', link: '/configration/codeblock' },
          { text: 'Analytics', link: '/configration/analytics' },
          { text: 'Comments', link: '/configration/comments' },
          { text: 'Gallery', link: '/configration/gallery' },
          { text: 'Custom Styles', link: '/configration/custom-style' }
        ]
      },
      {
        text: 'Tutorials',
        items: [
          { text: 'Check Status Aktivasi', link: '/tutorials/cas' },
          { text: 'Aktivasi Windows & Office', link: '/tutorials/mas' },
          { text: 'Install Window', link: '/tutorials/clean-install-windows' },
          { text: 'Install Office', link: '/tutorials/office-c2r-links' },
          { text: 'Remove Malware', link: '/tutorials/remove-malware' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coernet' }
    ]
    
  },
  sitemap: {
    hostname: 'https://coernet.github.io/',
  }
})
