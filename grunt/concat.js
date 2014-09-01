module.exports = {
  dev: {
    options: {
      process: function(src, filepath) {
        return '\n// ' + filepath + '\n' + src;
      }
    },
    src: [
      '<%= jsPath %>/local_data_module.js',
      '<%= jsPath %>/**/*.js'
    ],
    dest: '<%= distPath %>/chLocalData.js'
  }
};
