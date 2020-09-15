import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, OneToMany} from 'typeorm'
import { type } from 'os';


@Entity()
export class Pedido{

    @PrimaryGeneratedColumn()
    id : Number;

    @Column()
    idUsuario : string;

    @Column()
    total : number;

}