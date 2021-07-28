const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      name: 'App'
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
}