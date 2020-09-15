"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
//Router crea un objeto router
var router = express_1.Router();
var factura_controllers_1 = require("../controllers/factura.controllers");
//Ruta de todos los productos
router.get('/factura', factura_controllers_1.getFactura);
router.get('/factura/:id', factura_controllers_1.facturaId);
router.post('/factura', factura_controllers_1.createFactura);
router.put('/factura/:id', factura_controllers_1.actulizaFactura);
router.delete('/factura/:id', factura_controllers_1.eliminarFactura);
router.post('/facturaFinal/', factura_controllers_1.factura);
router.put('/cambioFactura/', factura_controllers_1.cambiarCompra);
exports.default = router;
