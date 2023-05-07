import {Router} from 'express';
const router = Router();

import { 
    getUsers, getUserById, createUser, updateUser, deleteUser 
} from '../controller/user.controller.js';

router.get('/user', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser);

export default router;