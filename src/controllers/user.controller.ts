import {Request, Response, text} from 'express'
import {getRepository, useContainer} from 'typeorm'
import {Registros} from '../entity/User'

//Ruta para el Login

let bandera: boolean;

export const login = async (req: Request, res: Response) =>{
    let contra = req.body.contra;
    let loginUsuario: any = await getRepository(Registros).createQueryBuilder("registros")
            .where("registros.correo = :correo",{correo: req.body.correo})
            .getOne()
            if(loginUsuario != null && loginUsuario.contra === contra){
                return res.send(loginUsuario);
                
            }else{
                return res.json({text: "No esta LOGEADO"});
            }
        
    

}; 

export const getUsers = async (req: Request, res: Response): Promise<Response> =>{
     const users = await getRepository(Registros).find();
    return res.json(users); 
}; 

export const usurioId = async (req: Request, res: Response): Promise<Response> =>{

    const results = await getRepository(Registros).findOne(req.params.id);
    return res.json(results);
};


export const createUser = async (req: Request, res: Response): Promise<Response> =>{
    const newUser =  getRepository(Registros).create(req.body);
    const results = await getRepository(Registros).save(newUser);
    return res.json(results)
};



export const actulizaUser = async (req: Request, res: Response): Promise<Response> =>{
    const user = await getRepository(Registros).findOne(req.params.id); //Busco en la tabla si el usuario esa con el id
    if(user){
        getRepository(Registros).merge(user,req.body); //los busco y los remplazo 
        const results = await getRepository(Registros).save(user); //ya despues de remplazodo de guarda el cambio
        return res.json(results);
    }

    return res.json({msg: 'No se encuentra el usuario'})
    
};

export const eliminarUser = async (req: Request, res: Response): Promise<Response> =>{
    const results = await getRepository(Registros).delete(req.params.id);
    return res.json(results);
};
