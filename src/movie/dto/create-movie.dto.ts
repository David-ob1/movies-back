import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto {

    @IsString()
    title:string

    @IsOptional()
    @IsString()
    banner?:string

    @IsString()
    poster:string

    @IsOptional()
    @IsString()
    image?: string;

    @IsString()
    category:string

    @IsString()
    description: string;

    @IsString()
    released: string;

    @IsNumber()
    rating: number;



    crate_at: Date;

    deleted_at:string
}
