import {Request, Response} from 'express'
import {getRepository, useContainer} from 'typeorm'
import {Productos} from '../entity/producto'

//------- TODAS LAS RUTAS DE LOS DEPARTAMENTOS DEL SUPMERCADO

//-- Funciones del crud para los productos

export const getProductos = async (req: Request, res: Response): Promise<Response> =>{
     const producto = await getRepository(Productos).find();
    return res.json(producto);
};

//Listar el producto por su id
export const productoId = async (req: Request, res: Response): Promise<Response> =>{

    const results = await getRepository(Productos).findOne(req.params.id);
    return res.json(results);
};

//Listarel producto por su tipo
export const productoTipo = async (req: Request, res: Response): Promise<Response> =>{

   const results = await getRepository(Productos).find();
   return res.json(results);
};

//Crear el producto
export const createProductos = async (req: Request, res: Response): Promise<Response> =>{
    const newProducto =  getRepository(Productos).create(req.body);
    const results = await getRepository(Productos).save(newProducto);
    return res.json(results)
};


//Actulizar el producto
export const actulizaProducto = async (req: Request, res: Response): Promise<Response> =>{
    const producto = await getRepository(Productos).findOne(req.params.id); //Busco en la tabla si la bebida esta con el id
    if(producto){
        getRepository(Productos).merge(producto,req.body); //los busco y los remplazo 
        const results = await getRepository(Productos).save(producto); //ya despues de remplazodo de guarda el cambio
        return res.json(results);
    }

    return res.json({msg: 'No se encuentra el Producto'})
    
};



//Eliminar el producto
export const eliminarProductos = async (req: Request, res: Response): Promise<Response> =>{
    const results = await getRepository(Productos).delete(req.params.id);
    return res.json(results);
};


