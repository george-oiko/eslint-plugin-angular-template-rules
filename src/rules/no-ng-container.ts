import { ESLintUtils } from '@typescript-eslint/utils';
import { getTemplateParserServices } from '@angular-eslint/utils';


export const RULE_NAME = 'no-ng-container';

export const rule = ESLintUtils.RuleCreator((ruleName) => ruleName)({
    name: RULE_NAME,
    meta: {
        type: 'problem',
        docs: {
            description: ``,
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
            default: 'Do not use ng-container'
        },
    },
    defaultOptions: [{
        selectors: [],
    }],
    create(context) {
        return {
            [`Content[name=ng-container]`](node: any) {
                const parserServices = getTemplateParserServices(context as any);
                const loc = parserServices.convertNodeSourceSpanToLoc(node.sourceSpan);
                context.report({
                    loc,
                    messageId: 'default',
                    data: {
                        element: node.name,
                    }
                })
            }
        };
    },
});