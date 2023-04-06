const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack');
module.exports = withModuleFederationPlugin({
  name: 'mf2-auth',
  exposes: {
    // './Component': './projects/mf2-auth/src/app/app.component.ts',
      './Module': './projects/mf2-auth/src/app/auth/auth.module.ts',
  },
  shared: {
      ...shareAll({
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto'
      }),
  },
});