import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers : any;
  faTrash=faTrash;
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getCutomers()
    .subscribe(res => {
      this.customers = res;
      console.log(this.customers);
    })
  }

  deleteCustomer(data : any){
    // console.log("Calling delete");
    this.service.deleteCustomer(data);
    this.reloadComponent();
  }

  reloadComponent() {
    window.location.reload();
    } 

}
