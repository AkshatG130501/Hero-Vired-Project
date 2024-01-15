import express from 'express';
import { deleteProgram,addPrograms, getPrograms, getNewUser, postNewUser, /*  postLoginUser, getLoginUser */ 
updateProgram} from '../controllers/userController.js';
const router = express.Router();

router.post('/', postNewUser);
router.get('/signup', getNewUser);
router.get('/programs', getPrograms);
router.post('/programs',addPrograms);
router.delete('/programs/:Name',deleteProgram)
router.put('/programs/:Name',updateProgram)
// router.post('/login', postLoginUser);
// router.get('/login', getLoginUser);

export default router;