import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Order } from 'src/order/order.entity';
import { OrderService } from 'src/order/order.service';

@Controller('customer')
export class CustomerController {
    constructor(public customerService: CustomerService) {}

    @Post()
    async saveCustomer(@Body(ValidationPipe) params):Promise<Order> {
        const currentCustomer = await this.customerService.storeCustomer(params.data);
        const orderService = new OrderService();
        const currentOrder = await orderService.storeOrder(currentCustomer, params.cartItems);
        return currentOrder;
    }

    @Post('/seeding')
    seeding() {
      return this.customerService.seeding();
    }
}
