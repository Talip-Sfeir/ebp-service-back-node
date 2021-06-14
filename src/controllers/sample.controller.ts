import { Request, Response } from 'express';

export const sample = async (
	req: Request,
	res: Response
): Promise<void | Response<undefined, Record<string, undefined>>> => {
	return res.send('Permission accepted');
};
