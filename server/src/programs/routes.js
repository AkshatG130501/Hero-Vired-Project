import express from 'express';
import { getNewUser, postNewUser, sendOtpToUser, /*  postLoginUser, getLoginUser */} from '../controllers/userController.js';
import { deleteProgram,addPrograms, getPrograms, updateProgram} from '../controllers/programController.js';
const router = express.Router();

router.post('/signup', postNewUser);
router.get('/signup', getNewUser);
router.post('/signup/otp', sendOtpToUser);
router.get('/programs', getPrograms);
router.post('/programs',addPrograms);
router.delete('/programs/:Name',deleteProgram)
router.put('/programs/:Name',updateProgram)
// router.post('/login', postLoginUser);
// router.get('/login', getLoginUser);

export default router;