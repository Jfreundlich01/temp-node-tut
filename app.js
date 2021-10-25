// npm - global command, comes with node
// npm --version

// locl dependency - use it onlu in this particulat project
// npm i <packageName>

// global dependemcy - use it in any project
// npm install -g <packageName>

//package.json = manifest file (stores important info about project)
//manual approach (create package.json in root)
//npm init (step by step)
//npm -init -y (everything default)

const lodash = require('lodash')

const items = [1,[2,3,[4]]]

const newItems = lodash.flattenDeep(items);
console.log(newItems);
