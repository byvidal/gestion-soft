import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();

router.post('/subject', authRequired, (req, res) => res.send('Materias'));

export default router;