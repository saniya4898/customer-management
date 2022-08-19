import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'http://localhost:3000/customers'
  constructor(private httpClient: HttpClient) { }

  getCutomers() : Observable<any> {
    return this.httpClient.get(this.url);
  }

  addCustomer(data : any) : Observable<any>{
    return this.httpClient.post(this.url,data);
  }

  deleteCustomer(data : any){
    console.log(data.id);
    return this.httpClient.delete(this.url+'/'+data.id)
    .subscribe(res => {
      console.log(res);
    });
  }
}
