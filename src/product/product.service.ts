import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
import { productsMock } from './products.mock';

@Injectable()
export class ProductService extends TypeOrmCrudService<Product> {
    //@InjectRepository(Product) repo
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository
    ) {
        super(productRepository);
    }

    async getRegisters(): Promise<Product[]> {
        const response = await this.productRepository.getRegisters();
        return response;
    }

    async storeProduct(item) {
        console.log('item => ', item);
        const product1 = new Product();
          product1.name = item.name;
          product1.image = item.image;
          product1.description = item.description;
          product1.price = item.price; 
        await this.productRepository.save(product1);
      }

    saveBusinessSeeds() {
        productsMock.map((item) => { this.storeProduct(item); });
    }
}
