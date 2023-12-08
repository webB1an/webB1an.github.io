const nav = [
  {
    text: 'About',
    activeMatch: `^/about/`,
    link: '/about/introduction'
  },
  {
    text: 'AI 指南',
    link: 'https://ai-compass.github.io/'
  },
  {
    text: 'Github',
    link: 'https://github.com/webB1an'
  },
  {
    text: 'Blog',
    activeMatch: `^/(blog)/`,
    items: [
      {
        text: '工具',
        items: [
          { text: '实用网站', link: '/blog/tools/useful-website' },
          { text: '三角形生成器', link: '/blog/tools/triangle' },
          { text: '阴影生成器', link: '/blog/tools/box-shadow' },
          { text: 'flex 布局', link: '/blog/tools/flex' },
          { text: '图片适配', link: '/blog/tools/object-fit-position' },
          { text: '文本超出显示省略号', link: '/blog/tools/text-overflow' },
        ]
      },
      {
        text: '前端',
        items: [
          { text: 'es6', link: '/blog/front-end/es6' },
          { text: 'vue3', link: '/blog/front-end/vue3' },
          { text: 'node', link: '/blog/front-end/node' },
        ]
      },
      {
        text: '面试',
        items: [
          { text: 'javascript', link: '/blog/interview/javascript' },
          { text: 'vue', link: '/blog/interview/vue' },
          { text: 'optimize', link: '/blog/interview/optimize' },
        ]
      },
    ]
  },
  {
    text: 'Respositories',
    items: [
      {
        text: 'Pnpm',
        items: [
          { text: 'pnpm-monorepo-templete', link: 'https://github.com/webB1an/pnpm-monorepo-templete' },
        ]
      },
      {
        text: 'Vite',
        items: [
          { text: 'simple-vite-templete-v2', link: 'https://github.com/webB1an/simple-vite-templete-v2' },
          { text: 'simple-vite-templete', link: 'https://github.com/webB1an/simple-vite-templete' },
          { text: 'vite-element-admin', link: 'https://github.com/webB1an/vite-element-admin' },
        ]
      },
      {
        text: 'AUTO-ANSWER',
        items: [
          { text: 'auto-answer-frontend', link: 'https://github.com/webB1an/auto-answer-frontend' },
          { text: 'auto-answer-backend', link: 'https://github.com/webB1an/auto-answer-backend' },
        ]
      },
    ]
  }
]

const sidebar = {
  '/about/': [
    {
      text: '关于我',
      items: [
        { text: '自我介绍', link: '/about/introduction' },
        {
          text: '联系我',
          link: '/about/contact'
        }
      ]
    }
  ],
  '/tools/': [
    {
      text: '工具',
      items: [
        { text: '工作', link: '/tools/work' },
        {
          text: '娱乐',
          link: '/tools/funny'
        }
      ]
    },
  ],
  '/blog/': [
    {
      text: '工具相关',
      items: [
        { text: '实用网站', link: '/blog/tools/useful-website' },
        { text: '三角形生成器', link: '/blog/tools/triangle' },
        { text: '阴影生成器', link: '/blog/tools/box-shadow' },
        { text: 'flex 布局', link: '/blog/tools/flex' },
        { text: '图片适配', link: '/blog/tools/object-fit-position' },
        { text: '文件上传', link: '/blog/tools/el-upload' },
        { text: '文本超出显示省略号', link: '/blog/tools/text-overflow' },
      ]
    },
    {
      text: '前端相关',
      items: [
        { text: 'algorithm', link: '/blog/front-end/algorithm' },
        { text: 'javascript', link: '/blog/front-end/javascript' },
        { text: 'css', link: '/blog/front-end/css' },
        { text: 'es6', link: '/blog/front-end/es6' },
        { text: 'vue', link: '/blog/front-end/vue' },
        { text: 'vue3', link: '/blog/front-end/vue3' },
        { text: 'node', link: '/blog/front-end/node' },
        { text: 'mongodb', link: '/blog/front-end/mongodb' },
        { text: 'docker', link: '/blog/front-end/docker' },
      ]
    },
    // { text: 'javascript', link: '/blog/interview/javascript' },
          // { text: 'vue', link: '/blog/interview/vue' },
          // { text: 'optimize', link: '/blog/interview/optimize' },
    {
      text: '面试相关',
      items: [
        { text: 'javascript', link: '/blog/interview/javascript' },
        { text: 'vue', link: '/blog/interview/vue' },
        { text: 'optimize', link: '/blog/interview/optimize' },
      ]
    },
    {
      text: '文章',
      items: [
        { text: '历史文章汇总', link: '/blog/article/collect' },
        { text: '2023 年文章汇总', link: '/blog/article/2023' },
        { text: '2022 年文章汇总', link: '/blog/article/2022' },
      ]
    },
  ]
}

export default {
  title: 'WuT1ao',
  description: 'Wu T1ao - Personal Blog',
  srcDir: 'src',
  scrollOffset: 'header',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/images/blog.gif',
    siteTitle: 'WuT1ao',
    nav,
    sidebar,
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/webB1an' },
    ],
    outline: [2, 6],
    outlineTitle: '本页目录',
    // editLink: {
    //   repo: 'webB1an/webB1an.github.io',
    //   text: 'Edit this page on GitHub'
    // },

    editLink: {
      pattern: 'https://github.com/webB1an/webB1an.github.io/edit/master/src/:path',
      text: '编辑此页面'
    },

    lastUpdatedText: '上次更新时间',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2022-${new Date().getFullYear()} Wu T1ao`
    },
    
  }
}
