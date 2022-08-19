import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { TotalPipe } from '../shared/pipes/total.pipe';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    AddCustomerComponent,
    CustomersListComponent,
    CustomerOrdersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule ,
    AppRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
