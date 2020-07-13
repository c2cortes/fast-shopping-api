import { Repository, EntityRepository } from "typeorm";
import { Customer } from "./customer.entity";

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {
    
    async getRegisters(): Promise<Customer[]> { 
        const query = this.createQueryBuilder('customer').take();
        const registers = await query.getMany();
        return registers;
    }
} 