import { ESLintUtils } from '@typescript-eslint/utils';

export const RULE_NAME = 'no-ng-container';

export const noNgContainer = ESLintUtils.RuleCreator((ruleName) => ruleName)({
    name: RULE_NAME,
    meta: {
        type: 'suggestion',
        docs: {
            description: `Since Angular v17 the new control flow is available`,
            recommended: 'warn',
        },
        schema: [],
        messages: {
            default: 'Try to use the new control flow. e.g @if (condition) {   } '
        },
    },
    defaultOptions: [],
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