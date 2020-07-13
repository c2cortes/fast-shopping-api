import { Body, Controller, Param, Post, ValidationPipe } from '@nestjs/common';
import { CustomerController } from '../customer/customer.controller';

@Controller('order')
export class OrderController {}
