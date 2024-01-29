import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";
import { Stack, StackProps } from "aws-cdk-lib";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsStepFunctionsTutorialsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsStepFunctionsTutorialsQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
