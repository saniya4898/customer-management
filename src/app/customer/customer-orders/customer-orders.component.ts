import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  customers : any;
  id : any;
  total : any;
  constructor(private route: ActivatedRoute,private service:CustomerService) { 
    this.route.params.
    subscribe( params => {
      console.log(params) ;
      this.id = params;
    });
  }

  ngOnInit(): void {
    this.service.getCutomers()
    .subscribe(res => {
      this.customers = res;
      console.log(this.customers);
    })
  }
}
