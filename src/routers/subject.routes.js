import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { createSubject } from '../controllers/subject.controller.js';

const router = Router();

router.post('/subject', authRequired, createSubject);

export default router;