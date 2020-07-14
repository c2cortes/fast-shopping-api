import { Controller, Post, Body, ValidationPipe, Get, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Order } from 'src/order/order.entity';
import { OrderService } from 'src/order/order.service';
import { Customer } from './customer.entity';

@Controller('customer')
export class CustomerController {
    constructor(public customerService: CustomerService) {}

    @Post()
    async saveCustomer(@Body(ValidationPipe) params):Promise<Order> {
        let currentCustomer;
        if(params.data.id){
            currentCustomer = params.data;
        } else {
            currentCustomer = await this.customerService.storeCustomer(params.data);
        }
        console.log('currentCustomer => LET', currentCustomer);
        const orderService = new OrderService();
        const currentOrder = await orderService.storeOrder(currentCustomer, params.cartItems);
        return currentOrder;
    }

    @Post('/seeding')
    seeding() {
      return this.customerService.seeding();
    }

    @Get('/:email')
    async getCustomer(@Param('email') email: String):Promise<Customer> {
        const currentCustomer = await this.customerService.validateExistingCustomer(email);
        console.log('currentCustomer => email from params', email);
        return currentCustomer;
    }
}
