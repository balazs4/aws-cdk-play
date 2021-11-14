// @ts-check
import { readFileSync } from 'fs';
import cdk from '@aws-cdk/core';
import lambda from '@aws-cdk/aws-lambda';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyStack');

new lambda.Function(stack, 'MyLambdaFunction', {
  code: new lambda.InlineCode(
    readFileSync('./index.js', { encoding: 'utf-8' })
  ),
  runtime: lambda.Runtime.NODEJS_14_X,
  handler: 'index.handler',
});
app.synth();
