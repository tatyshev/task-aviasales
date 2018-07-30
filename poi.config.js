module.exports = {
  entry: './src/index.tsx',
  publicPath: './',
  html: {
    title: 'Aviasales (Test task)'
  },
  plugins: [
    require('@poi/plugin-typescript')()
  ]
}
