import express from 'express';
import { getPrograms, getNewUser, postNewUser /*  postLoginUser, getLoginUser */ } from '../controllers/userController.js';
const router = express.Router();

router.post('/', postNewUser);
router.get('/signup', getNewUser);
router.get('/check', getPrograms);
// router.post('/login', postLoginUser);
// router.get('/login', getLoginUser);

export default router;