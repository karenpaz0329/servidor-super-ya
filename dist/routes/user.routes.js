"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
//Router crea un objeto router
var router = express_1.Router();
var user_controller_1 = require("../controllers/user.controller");
router.get('/users', user_controller_1.getUsers);
router.get('/users/:id', user_controller_1.usurioId);
router.post('/users', user_controller_1.createUser);
router.put('/users/:id', user_controller_1.actulizaUser);
router.delete('/users/:id', user_controller_1.eliminarUser);
router.post('/users/login', user_controller_1.login);
exports.default = router;
