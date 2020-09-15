import {Router} from 'express'
//Router crea un objeto router
const router = Router()

import {getUsers, usurioId, createUser, actulizaUser, eliminarUser, login} from '../controllers/user.controller'

router.get('/users', getUsers );
router.get('/users/:id', usurioId);
router.post('/users', createUser);
router.put('/users/:id',actulizaUser);
router.delete('/users/:id', eliminarUser);
router.post('/users/login', login);


export default router