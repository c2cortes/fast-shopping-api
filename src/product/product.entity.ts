import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { Category } from 'src/category/category.entity';

@Entity()
export class Product extends BaseEntity {

    // COLUMNAS ---------------------------------------------------------------------------------------
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 150})
    name: string;
    
    @IsNotEmpty()
    @Column({ length: 150})
    image: string;
    
    @IsNotEmpty()
    @Column({ length: 500 })
    description: string;
    
    @IsNotEmpty()
    @Column({ type: "numeric" })
    price: number;

    @ManyToOne(type => Category, category => category.products)
    category: Category;

    // Common Columns ---------------------------------------------------------------------------------
    @IsNotEmpty()
    @Column({ default: true })
    status: boolean; // 1 = Active, 0 = Inactive

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

}
