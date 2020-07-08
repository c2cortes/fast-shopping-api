import { Controller, Get, Post, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { ProductService } from './product.service';
import { Response } from 'express';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
    constructor(public productService: ProductService) {}

    @Get()
    async products(): Promise<Product[]> {
        const response = await this.productService.getRegisters();
        if(!response) {
            throw new NotFoundException('Business not found');
        }
        return response;
    }

    @Post('/seeding')
    seeding() {
      return this.productService.saveBusinessSeeds();
    }
}
