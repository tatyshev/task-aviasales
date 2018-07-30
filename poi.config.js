module.exports = {
  entry: './src/index.tsx',
  html: {
    title: 'Aviasales (Test task)'
  },
  plugins: [
    require('@poi/plugin-typescript')()
  ]
}
