const withTypescript = require("@zeit/next-typescript");
const withLess = require('@zeit/next-less')

// Where your antd-custom.less file lives
module.exports = withTypescript(withLess({

  lessLoaderOptions: {
    sourceMap: true,
    javascriptEnabled: true,
    modifyVars: {
			"@color1": "#00887A",
			"@color2": "#FFCCBC",
			"@color3": "#FFFFFF",
			"@color4": "#D3E3FC",
			"@color5": "#77A6F7",
			"@primary-color": "@color5",
			"@heading-color": "@color1",
			"@component-background": "@color4",
			"@layout-header-background": "@color5"
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
