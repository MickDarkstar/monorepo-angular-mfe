const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  library: { type: "module" },
  name: 'mf2',
  filename: "remoteEntry.js",
  exposes: {
    './Module': './projects/mf2-auth/src/app/auth/auth.module.ts',
    // './Component': './projects/mf2-auth/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
