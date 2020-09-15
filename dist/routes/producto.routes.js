"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
//Router crea un objeto router
var router = express_1.Router();
var producto_controllers_1 = require("../controllers/producto.controllers");
//Ruta de todos los productos
router.get('/producto', producto_controllers_1.getProductos);
router.get('/producto/:id', producto_controllers_1.productoId);
router.get('/producto/:tipo', producto_controllers_1.productoTipo);
router.post('/producto', producto_controllers_1.createProductos);
router.put('/producto/:id', producto_controllers_1.actulizaProducto);
router.delete('/producto/:id', producto_controllers_1.eliminarProductos);
exports.default = router;
