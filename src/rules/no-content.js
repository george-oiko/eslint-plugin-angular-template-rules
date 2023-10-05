const tsUtils = require("@typescript-eslint/utils");
const utils = require("@angular-eslint/utils");
const RULE_NAME = 'no-content';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: `test`,
      recommended: 'error',
    },
    schema: [{
      type: 'object',
      additionalProperties: false,
      properties: {
        selectors: {
          type: 'array',
          items: {
            type: 'string',
          }
        }
      },
    }],
    messages: {
      default: 'Do not use ng-content elements they are deprecated'
    },
  },
  defaultOptions: [{
    selectors: [],
  }],
  create(context) {
    return {
      [`Content[name=ng-content]`](node) {
        const parserServices = utils.getTemplateParserServices(context);
        const loc = parserServices.convertNodeSourceSpanToLoc(node.sourceSpan);
        context.report({
          loc,
          messageId: 'default',
          data: {
            element: node.name,
          },
        })
      }
    };
  },
};