const path = require('path')

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      modulesDirectories: [
        "src",
      ]
    }
  })

  return config
}
