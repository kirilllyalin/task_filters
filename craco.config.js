// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@border-radius-base': '4px',
              '@primary-color': '#BA6DE3',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  eslint: {
    enable: false,
  },
}
