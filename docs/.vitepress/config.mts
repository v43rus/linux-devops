import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/linux-devops/',
  head: [['link', { rel: 'icon', href: '/linux-devops/favicon.ico' }]],
  srcDir: '../',
  title: 'Linux DevOps Learning',
  description: 'Comprehensive Linux & DevOps notes, tutorials, and labs',
  
  themeConfig: {
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Cheat Sheets', link: '/cheat-sheets' },
      { text: 'Resources', link: '/resources' },
      { 
        text: 'GitHub', 
        link: 'https://github.com/v43rus/linux-devops' 
      }
    ],

    sidebar: {
      '/01-linux-fundamentals/': [
        {
          text: 'Linux Fundamentals',
          items: [
            { 
              text: 'The Linux Terminal', 
              link: '/01-linux-fundamentals/01-the-linux-terminal' 
            },
            { 
              text: 'File System (In Progress)', 
              link: '/01-linux-fundamentals/02-the-linux-file-system' 
            },
          ]
        },
      ],
      
      '/cheat-sheets/': [
        {
          text: 'Cheat Sheets',
          items: [
            { text: 'Linux Commands', link: '/cheat-sheets/linux-commands' }
          ]
        }
      ]
    },

    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/v43rus/linux-devops' 
      },
      { 
        icon: 'linkedin', 
        link: 'https://www.linkedin.com/in/leonard-sommer-jensen/' 
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Leonard Sommer Jensen'
    },

    // Enable search
    search: {
      provider: 'local'
    },

    // Enable edit link
    editLink: {
      pattern: 'https://github.com/v43rus/linux-devops/edit/master/:path',
      text: 'Edit this page on GitHub'
    }
  }
})