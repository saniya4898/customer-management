import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;
  const customer = {
    "id": 4,
    "firstName": "Saniya",
    "lastName": "Karigar",
    "city": "Pune",
    "orders": [
      {
        "product": "USB",
        "quantity": 2,
        "unitPrice": 22.23
      }
    ]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get customers',(done: DoneFn)=>{
    service.getCutomers().subscribe( res => {
      expect(res).not.toBe(null);
      done();
    });
  });

    it('should add customer',(done: DoneFn)=>{
      service.addCustomer(customer).subscribe( res => {
        expect(res).toEqual(customer);
        done();
      });

  });


});

