import {Router} from 'express'
//Router crea un objeto router
const router = Router()

import { getFactura,facturaId,createFactura,actulizaFactura,eliminarFactura, factura, cambiarCompra} from '../controllers/factura.controllers'


        
        //Ruta de todos los productos
       router.get('/factura', getFactura );
       router.get('/factura/:id', facturaId);
       router.post('/factura', createFactura);
       router.put('/factura/:id', actulizaFactura);
       router.delete('/factura/:id', eliminarFactura);
       router.post('/facturaFinal/', factura);
       router.put('/cambioFactura/', cambiarCompra);
      



export default router