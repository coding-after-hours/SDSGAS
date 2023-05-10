import * as cdk from 'aws-cdk-lib';

import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SdsgasStack extends cdk.Stack {
	constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const fn = new lambda.Function(this, 'MyFunction', {
			runtime: lambda.Runtime.NODEJS_18_X,
			handler: 'index.handler',
			code: lambda.Code.fromAsset(path.join(__dirname, '../src/')),
		});
	}
}
