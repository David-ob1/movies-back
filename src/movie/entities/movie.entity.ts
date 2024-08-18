import { text } from "stream/consumers";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity("movie")
export class Movie {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column("text")
    title:string

    @Column("text", { nullable: true })
    banner:string

    @Column("text")
    poster:string

    @Column("text", { nullable: true })
    image?:string

    @Column("text",)
    category:string


    @Column('text')
    description: string;

    @Column('text')
    released: string;

    @Column('numeric')
    rating: number;

    

    @CreateDateColumn()
    create_at: Date;

    @DeleteDateColumn()
    deleted_at:Date

}
