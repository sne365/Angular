import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

@Injectable({
  providedIn: 'root'
})
export class CanGaurdService implements CanDeactivate<CreateCustomerComponent> {
  canDeactivate(component1:CreateCustomerComponent):boolean{
    console.log(component1.customerform.dirty);
    if(component1.customerform.dirty)
    {
      return confirm('Are you sure you want to discard your changes?');
    }
      return true;
    }

  constructor() { }
}
