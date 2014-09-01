module.exports = {
  lodashJS: {
    expand: true,
    src: [
      '<%= componentsPath %>/lodash/dist/lodash.min.js',
      '<%= jsPath %>/vendor/lodash_module.js',
    ],
    dest: '<%= distPath %>',
    flatten: true
  }
};