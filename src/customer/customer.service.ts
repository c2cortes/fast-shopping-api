import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Customer } from './customer.entity';
import { CustomerRepository } from './customer.repository';

@Injectable()
export class CustomerService extends TypeOrmCrudService<Customer> {
    //@InjectRepository(Business) repo
    constructor(
      @InjectRepository(CustomerRepository) 
      private customerRepository: CustomerRepository
    ) {
      super(customerRepository);
    }

    async storeCustomer(data):Promise<Customer> {
      const customer = new Customer();
        customer.name = data.name;
        customer.identification = data.identification;
        customer.address = data.address;
        customer.phone = data.phone;
        customer.email = data.email;
        return await customer.save();
    }

    async validateExistingCustomer(email):Promise<Customer>{
      const customer = await this.customerRepository.findOne({ email });
      return customer;
    }

    async seeding() {
        const c = new Customer();
          c.name = 'Cristian';
          c.identification = '123';
          c.address = 'calle 10';
          c.phone = '3445566'; 
          c.email = 'cristiansk311@gmail.com'; 
        await this.customerRepository.save(c);
    }
}
