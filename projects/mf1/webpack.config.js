const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  library: { type: "module" },
  name: 'mf1',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './projects/mf1/src/app/items/items.module.ts',
    // './Component': './projects/mf1/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
