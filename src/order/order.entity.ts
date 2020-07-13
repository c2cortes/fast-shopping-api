import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Customer } from '../customer/customer.entity';

@Entity()
export class Order extends BaseEntity {

    // COLUMNAS ---------------------------------------------------------------------------------------
    @PrimaryGeneratedColumn()
    id: number;
    
    @IsNotEmpty()
    @Column({ type: 'json' })
    products: string;

    // Relations ---------------------------------------------------------------------------------------
    @IsNotEmpty()
    @ManyToOne(type => Customer, customer => customer.orders)
    customer: Customer;
    
    // Common Columns ---------------------------------------------------------------------------------
    @IsNotEmpty()
    @Column({ default: true })
    status: boolean; // 1 = Active, 0 = Inactive

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

}
