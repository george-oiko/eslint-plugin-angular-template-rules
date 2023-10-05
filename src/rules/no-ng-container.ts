import { ESLintUtils } from '@typescript-eslint/utils';


export const RULE_NAME = 'no-ng-container';

export const rule = ESLintUtils.RuleCreator((ruleName) => ruleName)({
    name: RULE_NAME,
    meta: {
        type: 'suggestion',
        docs: {
            description: `Try to use the new template syntax`,
            recommended: 'error',
        },
        schema: [],
        messages: {
            default: 'Do not use ng-container'
        },
    },
    defaultOptions: [{
        selectors: [],
    }],
    create(context) {
        return {
            [`Element$1[name=ng-container]`](node: any) {
                context.report({
                    node,
                    messageId: 'default',
                    data: {
                        element: node.name,
                    }
                })
            }
        };
    },
});