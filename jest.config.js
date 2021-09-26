const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/mfe-app',
    '<rootDir>/apps/mfe-counter',
    '<rootDir>/apps/mfe-scoreboard',
    '<rootDir>/apps/mfe-toh',
    '<rootDir>/apps/mfe-dashboard',
  ],
};
