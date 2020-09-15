import 'reflect-metadata';

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
//Importo para hacer las conexion a la base de datos
import {createConnection} from 'typeorm'


import userRoutes from './routes/user.routes'
import  productoRoutes from './routes/producto.routes'
import facturaRoutes from './routes/factura.routes'

/*App es nuestro servidor*/
const app  = express()
/*En esta linea va a saber a que base de datos se va a conectar
  va a ir a al archivo ORMCONFIG.JSON */
  
createConnection();

 //MidelWars son dos funciones que se ejecutan antes de que llegan a la ruta
app.use(cors());
app.use(morgan('dev'));


//Cuando se envien datos se puedan mostrar en formato Json
app.use(express.json());


//Rutas del Usuario
app.use(userRoutes);

//Rutas de los productos
app.use(productoRoutes);

//Rutas de Faturas
app.use(facturaRoutes);


/*El servidor se ejecutara por el puerto 3000*/
app.listen(3000);
console.log('El servidor esta por el puerto' , 3000);
