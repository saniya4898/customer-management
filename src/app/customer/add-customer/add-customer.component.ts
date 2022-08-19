import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  
  customerForm = this.fb.group({
    firstName : ['', Validators.required],
    lastName : ['', Validators.required],
    city : ['', Validators.required],
    product : [''],
    quantity : [''],
    unitPrice : ['']
    });
  
  displayOrder = false;
  id = 0;

  constructor(private service:CustomerService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomerId(){
 
    this.service.getCutomers()
    .subscribe(res => {
    this.id = res.length+1;
    console.log("inside getcustomerID"+this.id);
    }) 
  }

  getCustomer() : any{
    this.getCustomerId();
    console.log("inside addcustomer"+this.id);
    if(this.displayOrder && this.customerForm.controls['product'].value != ''){
      var customer = {
        id : this.id,
        firstName: this.customerForm.controls['firstName'].value,
        lastName: this.customerForm.controls['lastName'].value,
        city: this.customerForm.controls['city'].value,
        orders: [
          {
            product:this.customerForm.controls['product'].value,
            quantity: this.customerForm.controls['quantity'].value,
            unitPrice:this.customerForm.controls['unitPrice'].value
          }
        ]
      }
    }
    else{
      customer = {
        id : this.id,
        firstName: this.customerForm.controls['firstName'].value,
        lastName: this.customerForm.controls['lastName'].value,
        city: this.customerForm.controls['city'].value,
        orders: []
      }
    }
    
    return customer;
  }
  addCustomer(){
    
    console.log(this.customerForm.controls['firstName'].value);
    console.log(this.customerForm.controls['lastName'].value);
    console.log(this.customerForm.controls['city'].value);
    this.service.addCustomer(this.getCustomer()).subscribe( 
      (data) =>{
        console.log(data);
         this.reloadComponent();
      });  
  }

  reloadComponent() {
    window.location.reload();
    } 

    

    addOrder(){
      this.displayOrder = true;
      
    }

}
