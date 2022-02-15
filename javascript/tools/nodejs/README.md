# NPM
- `npm root -g` - tells you where NodeJS global dir is
- `npm list` - lists latest versions of all the npm packages installed, including their dependencies, i.e. `npm list --depth=0` gets only direct dependencies (those in package.json)
- `npm list -g --depth 0` - list all globally installed packages
- `npm outdated` - to discover new releases of the packages, you run npm outdated
- `npx` lets you run code built with Node.js and published through the npm registry