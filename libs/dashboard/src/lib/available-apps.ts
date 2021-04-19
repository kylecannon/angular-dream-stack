import { loadRemoteModule } from '@angular-architects/module-federation';
import { AppRegistration } from '@angular-dream/app-utils';

export const AvailableApps = (isProduction = false): AppRegistration[] => [
  {
    name: 'Counter',
    // yarn start mfe-counter
    bundle: () =>
      loadRemoteModule({
        remoteName: 'mfe_counter',
        exposedModule: './Module',
        remoteEntry: isProduction
          ? '/mfe-counter/remoteEntry.js'
          : 'http://localhost:4001/remoteEntry.js',
      }).then((m) => m.MfeAppModule),
  },
  {
    name: 'Scoreboard',
    // we don't need to use module federation for this to work... we can just code split as well.
    bundle: () =>
      import('@angular-dream/scoreboard').then((m) => m.ScoreboardModule),
    // yarn start mfe-scoreboard
    // bundle: () =>
    //   loadRemoteModule({
    //     remoteName: 'mfe_scoreboard',
    //     exposedModule: './Module',
    //     remoteEntry: isProduction ? '/mfe-scoreboard/remoteEntry.js' : 'http://localhost:4002/remoteEntry.js',
    //   }).then((m) => m.MfeAppModule),
  },
  {
    name: 'Tour of Heroes',
    // yarn start mfe-toh
    bundle: () =>
      loadRemoteModule({
        remoteName: 'mfe_toh',
        exposedModule: './Module',
        remoteEntry: isProduction
          ? '/mfe-toh/remoteEntry.js'
          : 'http://localhost:4003/remoteEntry.js',
      }).then((m) => m.MfeAppModule),
    defaultHeightPx: 750,
  },
  {
    name: 'Dashboard',
    // yarn start mfe-dashboard
    bundle: () =>
      loadRemoteModule({
        remoteName: 'mfe_dashboard',
        exposedModule: './Module',
        remoteEntry: isProduction
          ? '/remoteEntry.js'
          : 'http://localhost:4004/remoteEntry.js',
      }).then((m) => m.MfeAppModule),
    defaultHeightPx: 750,
  },
];
