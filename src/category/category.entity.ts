import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { Product } from 'src/product/product.entity';

@Entity()
export class Category extends BaseEntity {

    // COLUMNAS ---------------------------------------------------------------------------------------
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 50})
    name: string;

    // Relations ---------------------------------------------------------------------------------------
    @IsNotEmpty()
    @OneToMany(type => Product, product => product.category)
    products: Product[];

    // Common Columns ---------------------------------------------------------------------------------
    @IsNotEmpty()
    @Column({ default: true })
    status: boolean; // 1 = Active, 0 = Inactive

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

}
