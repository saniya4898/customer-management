import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any[]): any {
    var sum = 0;
    value.forEach(e => {
      sum = sum + e.unitPrice*e.quantity;
      console.log(e.unitPrice*e.quantity);
    });
    console.log(sum);
    return sum;
  }

}
