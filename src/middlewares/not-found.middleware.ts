import { Response } from 'express';

export const notFoundHandler = async (
	response: Response
): Promise<void | Response<undefined, Record<string, undefined>>> => {
	const message = 'Resource not found';

	response.status(404).send(message);
};
