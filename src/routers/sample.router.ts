import express from 'express';
import { sample } from '../controllers/sample.controller';

export const sampleRouter = express.Router();

sampleRouter.get('/', sample);
