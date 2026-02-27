import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { createSubject, getSubjects, deleteSubjects, updateSubjects } from '../controllers/subject.controller.js'; 

const router = Router();

router.post('/subject', authRequired, createSubject); 
router.get('/subject/:id', authRequired, getSubjects); 
router.delete('/subject/:id', authRequired, deleteSubjects);
router.put('/subject/:id', authRequired, updateSubjects);

export default router;