import { Rule } from "eslint";

export function noImport(context: Rule.RuleContext): Rule.RuleListener {
    return {
        ImportDeclaration(node) {
            context.report({
                node,
                message: 'Are you sure about this?'
            })
        }
    }
}