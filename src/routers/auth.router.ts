import express from 'express';
import { signup, login, logout, reset } from '../controllers/auth.controller';

export const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/reset', reset);
