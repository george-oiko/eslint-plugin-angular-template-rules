import { rule } from './rules/no-ng-container';
import { noImport } from './rules/no-import';

module.exports = {
    rules: {
        'no-ng-container': rule,
        'no-imports': noImport
    },
};