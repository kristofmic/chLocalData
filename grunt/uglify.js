module.exports = {
  dist: {
    options: {
      compress: {
        drop_console: false
      }
    },
    files: {
      '<%= distPath %>/chLocalData.min.js': [
        '<%= distPath %>/chLocalData.js'
      ],
      '<%= distPath %>/lodash_module.min.js': [
        '<%= distPath %>/lodash_module.js'
      ]
    }
  }
};