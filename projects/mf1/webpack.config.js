const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack');
module.exports = withModuleFederationPlugin({
  name: 'mf1',
  exposes: {
    // './Component': './projects/mf1/src/app/app.component.ts',
    './Module': './projects/mf1/src/app/items/items.module.ts',
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    }),
  },
});