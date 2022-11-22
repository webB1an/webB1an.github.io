const nav = [
  {
    text: 'Blog',
    activeMatch: `^/(blog)/`,
    items: [
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
    text: 'About',
    activeMatch: `^/about/`,
    link: '/about/introduction'
  },
  {
    text: 'Tools',
    activeMatch: `^/tools/`,
    items: [
      { text: '工作', link: '/tools/work' },
      { text: '娱乐', link: '/tools/funny  ' },
    ]
  },
  {
    text: 'Github',
    link: 'https://github.com/webB1an'
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
  },
  // {
  //   text: 'API',
  //   activeMatch: `^/api/`,
  //   link: '/api/'
  // },
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
      text: '前端相关',
      items: [
        { text: 'javascript', link: '/blog/front-end/javascript' },
        { text: 'es6', link: '/blog/front-end/es6' },
        { text: 'vue', link: '/blog/front-end/vue' },
        { text: 'vue3', link: '/blog/front-end/vue3' },
        { text: 'node', link: '/blog/front-end/node' },
        { text: 'mongoose', link: '/blog/front-end/mongoose' },
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
        { text: 'docker + vue + express + mongodb 部署', link: '/blog/article/1' },
        { text: '从 centos docker 上备份 mongodb 数据到本地', link: '/blog/article/2' },
        { text: 'Express+Mongodb 动态注入 mongodb 密码实践记录', link: '/blog/article/3' },
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
  themeConfig: {
    logo: '/images/blog.gif',
    siteTitle: 'W',
    nav,
    sidebar,
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
      pattern: 'https://github.com/webB1an/webB1an.github.io/edit/main/docs/:path',
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