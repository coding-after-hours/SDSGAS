import { APIGatewayEvent, APIGatewayProxyResult, Context, Handler } from 'aws-lambda';

export const handler: Handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
	return {
		statusCode: 200,
		body: 'yay it works!',
	};
};
