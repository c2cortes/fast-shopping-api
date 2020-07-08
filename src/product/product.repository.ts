import { Repository, EntityRepository } from "typeorm";
import { Product } from "./product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    
    async getRegisters(): Promise<Product[]> { 
        const query = this.createQueryBuilder('product').take();
        const registers = await query.getMany();
        return registers;
    }
} 