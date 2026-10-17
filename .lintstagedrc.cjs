/** @type {import('lint-staged').Config} */
module.exports = {
  '*.{md}': 'prettier --write',
  '*.{ts,tsx,js}': 'eslint',
  '**/*.{scss}': (files) => {
    const list = files.filter(
      (f) => !f.replace(/\\/g, '/').includes('/src/styles/')
    )
    return list.length ? [`prettier --write ${list.join(' ')}`] : []
  },
}
