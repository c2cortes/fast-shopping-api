import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { Order } from '../order/order.entity';

@Entity()
export class Customer extends BaseEntity {

    // COLUMNAS ---------------------------------------------------------------------------------------
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 50})
    name: string;
    
    @IsNotEmpty()
    @Column({ length: 10})
    identification: string;
    
    @IsNotEmpty()
    @Column({ length: 50 })
    address: string;
    
    @IsNotEmpty()
    @Column({ length: 10 })
    phone: string;

    @IsNotEmpty()
    @Column({ length: 50 })
    @IsEmail()
    email: string;

    @OneToMany(type => Order, order => order.customer)
    orders: Order[];

    // Common Columns ---------------------------------------------------------------------------------
    @IsNotEmpty()
    @Column({ default: true })
    status: boolean; // 1 = Active, 0 = Inactive

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

}
