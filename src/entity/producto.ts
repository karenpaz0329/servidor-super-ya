import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, OneToMany} from 'typeorm'
import { type } from 'os';
import { Factura } from './factura';

@Entity()
export class Productos {

    @PrimaryGeneratedColumn()
    id : Number;

    @Column()
    nombre : string;

    @Column()
    descripcion: string;

    @Column()
    precio : number;

    @Column()
    img : string;

    @Column()
    tipo : number;

}

