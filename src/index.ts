import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middlewares/error.middleware';
import { notFoundHandler } from './middlewares/not-found.middleware';
import { sampleRouter } from './routers/sample.router';
import { authRouter } from './routers/auth.router';
import { validateFirebaseIdToken } from './middlewares/auth.middleware';

dotenv.config();

// App Variables

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// Log the request
app.use((req, res, next) => {
	console.log(
		`METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.status}]`
	);

	next();
});

// App Configuration
app.use(helmet());
app.use(cors());
app.use(express.json());

// Route
app.use('/api/auth', authRouter);
app.use(validateFirebaseIdToken);
app.use('/api/sample', sampleRouter);

// App use middlewares
app.use(errorHandler);
app.use(notFoundHandler);

// Server Activation
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
