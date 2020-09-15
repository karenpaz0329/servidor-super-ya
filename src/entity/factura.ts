import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany} from 'typeorm'
import { Registros } from './User';
import { type } from 'os';
import { Productos } from './producto';

@Entity()
export class Factura {

    @PrimaryGeneratedColumn()
    id : Number;


    @Column()
    nombre: string;

    @Column()
    precio: number;

    @Column()
    total: number;

    @Column()
    compra: number = 0;

    @Column()
    idUsuario: number;


    
}
