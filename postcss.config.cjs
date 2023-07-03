const postcssJitProps = require('postcss-jit-props')
const postcssNesting = require('postcss-nesting')
const postcssCustomMedia = require('postcss-custom-media')
const postcssMediaRanges = require('postcss-media-minmax')
const postcssImport = require('postcss-import')
const postcssGlobalData = require('@csstools/postcss-global-data');
const OpenProps = require('open-props')

module.exports = {
  plugins: [
    postcssGlobalData({ 
        files: [
            './node_modules/open-props/media.min.css',
        ],
    }),
    postcssImport({ path: ['src'] }),
    postcssCustomMedia(),
    postcssMediaRanges(),
    postcssJitProps(OpenProps),
    postcssNesting(),
  ],
}