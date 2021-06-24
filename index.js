module.exports = (opts) => {
  opts.root = opts.root || '/'
  opts.nav = opts.nav || [
    { text: 'post', link: opts.root },
    { text: 'categories', link: '/category/' },
  ]
  const config = {
    name: 'vuepress-theme-chronicle',
    plugins: [
      [
        '@vuepress/blog', {
          directories: [
            {
              id: 'Post',
              dirname: 'posts',
              path: opts.root,
            },
          ], frontmatters: [
            {
              id: 'Category',
              keys: ['category'],
              path: '/category/',
              layout: 'FrontmatterIndex',
            },
          ], globalPagination: {
            lengthPerPage: 10,
          }, feed: opts.feed || {},
        },
      ],
    ],
  }
  return config
}