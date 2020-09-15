import {Router} from 'express'
//Router crea un objeto router
const router = Router()

import {getProductos, productoId, productoTipo, createProductos, actulizaProducto, eliminarProductos} from '../controllers/producto.controllers'


        
        //Ruta de todos los productos
       router.get('/producto', getProductos );
       router.get('/producto/:id', productoId);
       router.get('/producto/:tipo', productoTipo);
       router.post('/producto', createProductos);
       router.put('/producto/:id',actulizaProducto);
       router.delete('/producto/:id', eliminarProductos);



export default router