const withTypescript = require("@zeit/next-typescript");
const withLess = require('@zeit/next-less')
const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
module.exports = withTypescript(withLess({

  lessLoaderOptions: {
    sourceMap: true,
    javascriptEnabled: true,
    modifyVars: {
			"@primary-color": "#3AAFA9",
			"@heading-color": "#FEFFFF",
			"@text-color": "#DEF2F1",
			"@text-color-secondary": "#FEFFFF",
			"@disabled-color": "#000000",
			"@body-background": "#3AAFA9",
			"@component-background": "#3AAFA9"
    },
  },
  useFileSystemPublicRoutes: false,
  webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
					loader: 'babel-loader',
				},
				{
					loader: '@svgr/webpack',
					options: {
						babel: false,
						icon: true,
					},
				},
			],
		})
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
			});
			
    }
    return config
  },
}))
