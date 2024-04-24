export default {
  transformers: {
    name: 'index.js',
    options: {
      plugins: [
        'removeDimensions',
        {
          name: 'preset-default',
          params: { overrides: { removeViewBox: false } }
        }
      ]
    }
  }
};
