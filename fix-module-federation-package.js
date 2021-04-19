const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(
  process.cwd(),
  'node_modules/@angular-architects/module-federation/package.json'
);

const originalContents = fs.readFileSync(packageJsonPath, { encoding: 'utf8' });
const parsedContents = JSON.parse(originalContents);
const sanitizedContents = {
  ...parsedContents,
  main: parsedContents.main.replace('\\', '/'),
  typings: parsedContents.typings.replace('\\', '/'),
};
const newContents = JSON.stringify(sanitizedContents, null, 2);
fs.writeFileSync(packageJsonPath, newContents, { encoding: 'utf8' });
