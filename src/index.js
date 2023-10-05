// import { rule } from './rules/no-ng-container';
// import { noImport } from './rules/no-import';
// import { noImport } from './rules/no-content';
const noContent = require("./rules/no-content");
module.exports = {
    rules: {
        'no-content': noContent
    },
};