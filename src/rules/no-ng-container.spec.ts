import { RuleTester, convertAnnotatedSourceToFailureCase } from '@angular-eslint/utils';
import { RULE_NAME, noNgContainer } from './no-ng-container';
const messageId = 'default';
const valid = [
  '<div *ngIf="show"></div>',
];
const invalid = [
  convertAnnotatedSourceToFailureCase({
    messageId,
    description: 'Prompts you to use the new control flow',
    annotatedSource: `
<ng-container>
~~~~~~~~~~~~~~
          `,
    data: { element: 'ng-container' }
  })
];

const ruleTester = new RuleTester({
  parser: '@angular-eslint/template-parser',
});

ruleTester.run(RULE_NAME, noNgContainer, {
  valid,
  invalid,
});