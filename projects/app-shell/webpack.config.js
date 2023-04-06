const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack');
module.exports = withModuleFederationPlugin({
  remotes: {
      "mf1": "mf1@http://localhost:4300/remoteEntry.js",
      "mf2": "mf2:http://localhost:4200/remoteEntry.js",
  },
  shared: {
      ...shareAll({
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto'
      }),
  },
});