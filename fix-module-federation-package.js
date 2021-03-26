const fs = require('fs/promises');
const path = require('path');

const packageJsonPath = path.join(
  process.cwd(),
  'node_modules/@angular-architects/module-federation/package.json'
);

fs.readFile(packageJsonPath, { encoding: 'utf8' })
  .then((fileContents) => {
    const parsedContents = JSON.parse(fileContents);
    return {
      ...parsedContents,
      main: parsedContents.main.replace('\\', '/'),
      typings: parsedContents.typings.replace('\\', '/'),
    };
  })
  .then((sanitizedContents) => JSON.stringify(sanitizedContents, null, 2))
  .then((newContents) =>
    fs.writeFile(packageJsonPath, newContents, { encoding: 'utf8' })
  );
