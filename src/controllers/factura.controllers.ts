import {Request, Response} from 'express'
import {getRepository, useContainer} from 'typeorm'
import { Factura } from '../entity/factura'
import { Pedido } from '../entity/pedido'

//------- TODAS LAS RUTAS DE LOS DEPARTAMENTOS DEL SUPMERCADO

//-- Funciones del crud para los productos

export const getFactura = async (req: Request, res: Response): Promise<Response> =>{
     const producto = await getRepository(Factura).find();
    return res.json(producto);
};

//Listar el producto por su id
export const facturaId = async (req: Request, res: Response): Promise<Response> =>{

    const results = await getRepository(Factura).findOne(req.params.id);
    return res.json(results);
};


//Crear el producto
export const createFactura = async (req: Request, res: Response): Promise<Response> =>{
    const newProducto =  getRepository(Factura).create(req.body);
    const results = await getRepository(Factura).save(newProducto);
    return res.json(results)
};


//Actulizar el producto
export const actulizaFactura = async (req: Request, res: Response): Promise<Response> =>{
    const producto = await getRepository(Factura).findOne(req.params.id); //Busco en la tabla si la bebida esta con el id
    if(producto){
        getRepository(Factura).merge(producto,req.body); //los busco y los remplazo 
        const results = await getRepository(Factura).save(producto); //ya despues de remplazodo de guarda el cambio
        return res.json(results);
    }

    return res.json({msg: 'No se encuentra la Factura'})
    
};



//Eliminar el producto
export const eliminarFactura = async (req: Request, res: Response): Promise<Response> =>{
    const results = await getRepository(Factura).delete(req.params.id);
    return res.json(results);
};


export const factura = async (req: Request, res: Response): Promise<Response> =>{
    const  results = await getRepository(Factura).find({where: {idUsuario: req.body.idUsuario, compra: 0}});
    let total =0;
    for (let index = 0; index < results.length; index++) {
         total  = total + results[index].precio;
    }

    console.log(total);

    return res.json(results);
   
}


export const cambiarCompra = async (req: Request, res: Response): Promise<Response> =>{
    const  results = await getRepository(Factura).find({ where: {idUsuario: req.body.idUsuario, compra: 0}});
 
    
     for (let index = 0; index < results.length; index++) {
         results[index].compra = 1;
     }

     const result = await getRepository(Factura).save(results); 
    
     return res.json(result);
 }
