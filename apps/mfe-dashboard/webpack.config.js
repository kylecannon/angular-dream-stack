const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: 'mfe_dashboard',
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: 'mfe_dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './apps/mfe-dashboard/src/app/mfe-app.module.ts',
      },

      // For hosts (please adjust)
      remotes: {
        mfe_counter: 'mfe_counter@http://localhost:4001/remoteEntry.js',
        mfe_scoreboard: 'mfe_scoreboard@http://localhost:4002/remoteEntry.js',
        mfe_toh: 'mfe_toh@http://localhost:4003/remoteEntry.js',
        mfe_dashboard: 'mfe_dashboard@http://localhost:4004/remoteEntry.js',
      },

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
