"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
//Importo para hacer las conexion a la base de datos
var typeorm_1 = require("typeorm");
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var producto_routes_1 = __importDefault(require("./routes/producto.routes"));
var factura_routes_1 = __importDefault(require("./routes/factura.routes"));
/*App es nuestro servidor*/
var app = express_1.default();
/*En esta linea va a saber a que base de datos se va a conectar
  va a ir a al archivo ORMCONFIG.JSON */
typeorm_1.createConnection();
//MidelWars son dos funciones que se ejecutan antes de que llegan a la ruta
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
//Cuando se envien datos se puedan mostrar en formato Json
app.use(express_1.default.json());
//Rutas del Usuario
app.use(user_routes_1.default);
//Rutas de los productos
app.use(producto_routes_1.default);
//Rutas de Faturas
app.use(factura_routes_1.default);
/*El servidor se ejecutara por el puerto 3000*/
app.listen(3000);
console.log('El servidor esta por el puerto', 3000);
