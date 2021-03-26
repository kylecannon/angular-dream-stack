const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: 'mfe_toh',
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: 'mfe_toh',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './apps/mfe-toh/src/app/mfe-app.module.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "ngx-dashboard-widget-sandbox-example": "ngx-dashboard-widget-sandbox-example@http://localhost:4200/remoteEntry.js",
      //     "mfe-app": "mfe-app@http://localhost:4000/remoteEntry.js",
      //     "mfe-widget-a": "mfe-widget-a@http://localhost:4001/remoteEntry.js",
      //     "mfe-widget-b": "mfe-widget-b@http://localhost:4002/remoteEntry.js",

      // },

      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },

        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
