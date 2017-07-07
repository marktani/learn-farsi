module.exports = {
  distDir: 'build',
  exportPathMap: () => ({
    '/': { page: '/index' },
    '/suggestions': { page: '/suggestions' },
  }),
}
