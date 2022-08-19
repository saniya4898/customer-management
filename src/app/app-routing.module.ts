import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { CustomerOrdersComponent } from './customer/customer-orders/customer-orders.component';
import { OrdersListComponent } from './order/orders-list/orders-list.component';

const routes: Routes = [
  {
    path: '',
    component: AddCustomerComponent
  },
  {
    path: 'customerorders/:id',
    component: CustomerOrdersComponent

  },
  {
    path: 'orders',
    component: OrdersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
