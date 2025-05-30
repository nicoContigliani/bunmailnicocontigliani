import express from 'express';
import { mailReturnHome } from '../apiservices/resources/resources.controller';
// import { getImage, logImageRequest } from '../controllers/imageController';

const router = express.Router();

// router.use('/:id', logImageRequest);
 router.get("/:id", mailReturnHome);

export default router;