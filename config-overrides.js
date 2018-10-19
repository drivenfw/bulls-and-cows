const { injectBabelPlugin, compose } = require('react-app-rewired')


function inject(plugin) {
  return injectBabelPlugin.bind(undefined, plugin)
}

module.exports = compose(
  inject([
    'react-intl-auto', 
    { removePrefix: 'src/', filebase: true, includeExportName: true }
  ])
)


