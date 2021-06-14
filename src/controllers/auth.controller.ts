import { Request, Response } from 'express';

export const signup = async (
	req: Request,
	res: Response
): Promise<void | Response<undefined, Record<string, undefined>>> => {
	const { email, password } = req.body;
	let validate = false;

	if (email !== null && password !== null) {
		if (validateEmail(email)) {
			validate = true;
		}
	}

	if (validate) {
		return res.status(200).send('Email and password is valid');
	} else {
		return res.status(500).send('Permission denied');
	}
};

export const login = async (
	req: Request,
	res: Response
): Promise<void | Response<undefined, Record<string, undefined>>> => {
	const { email, password } = req.body;
	let validate = false;

	if (email !== null && password !== null) {
		if (validateEmail(email)) {
			validate = true;
		}
	}

	if (validate) {
		return res.status(200).send('Email and password is valid');
	} else {
		return res.status(500).send('Permission denied');
	}
};

export const logout = async (
	req: Request,
	res: Response
): Promise<void | Response<undefined, Record<string, undefined>>> => {
	res.status(200).send('Signed out');
};

function validateEmail(email: string) {
	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(String(email).toLowerCase());
}
