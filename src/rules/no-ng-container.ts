import { ESLintUtils } from '@typescript-eslint/utils';

export const RULE_NAME = 'no-ng-container';
export type MessageIds = 'noNgContainer';

export const noNgContainer = ESLintUtils.RuleCreator((ruleName) => ruleName)({
    name: RULE_NAME,
    meta: {
        type: 'suggestion',
        docs: {
            description: `Prompts you to use the new control flow`,
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
            [`Template[tagName=ng-container]`](node: any) {
               if(node['templateAttrs'].some((a: any) => a.name === 'ngIf')) {
                   context.report({
                       node,
                       messageId: 'default',
                       data: {
                           element: node.name,
                       }
                   })
               } else {
                return;
               }
            }
        };
    },
});