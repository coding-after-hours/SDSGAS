import * as cdk from 'aws-cdk-lib';

import * as lambda from 'aws-cdk/aws-lambda-nodejs';
import * as path from 'path';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SdsgasStack extends cdk.Stack {
	constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const helloLambda = new lambda.NodejsFunction(this, 'MyLambda', {
			entry: path.join(__dirname, '../functions/index.ts'),
		});
	}
}
