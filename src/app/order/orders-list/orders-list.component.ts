import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer/service/customer.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  customers : any;
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getCutomers()
    .subscribe(res => {
      this.customers = res;
      console.log(this.customers);
    })
  }


}
