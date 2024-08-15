import { Delete } from "@nestjs/common";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column("text")
    name:string

    @Column("text")
    email:string

    @Column("text")
    password: string

    @CreateDateColumn()
    crate_at: Date;

    @DeleteDateColumn()
    deleted_at:string


}
