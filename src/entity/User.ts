import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Factura } from './factura';

@Entity()
export class Registros {

    @PrimaryGeneratedColumn()
    id : Number;

    @Column()
    nombre : string;

    @Column()
    usuario : string;

    @Column()
    correo : string;

    @Column()
    contra : string;
    
   
}