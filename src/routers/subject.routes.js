import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { createSubject } from '../controllers/subject.controller.js';
import { getSubjects, deleteSubjects, updateSubjects } from '../controllers/subject.controller.js';

const router = Router();

router.get('/subject:id', authRequired, getSubject);
router.delete('/subject/:id', authRequired, deleteSubject);
router.put('/subject/:id', authRequired, updateSubject);

export default router;