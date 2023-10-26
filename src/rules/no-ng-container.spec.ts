import { RuleTester, convertAnnotatedSourceToFailureCase } from '@angular-eslint/utils';
import { RULE_NAME, noNgContainer } from './no-ng-container';
const messageId = 'default';
const valid = [
  '<div *ngIf="show"></div>',
  '<ng-container>',
  '<ng-container #templ>',
  '<ng-container any>',
];
const invalid = [
  convertAnnotatedSourceToFailureCase({
    messageId,
    description: 'Prompts you to use the new control flow',
    annotatedSource: `
<ng-container *ngIf="true">
~~~~~~~~~~~~~~~~~~~~~~~~~~~
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