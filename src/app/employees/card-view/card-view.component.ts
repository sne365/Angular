import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/model/customer.model';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  searchTerm: string;
    employee: Customers[];
    constructor(private _customerService:CustomerService,private router:Router) { }

    ngOnInit() {
      this.employee = this._customerService.getCustomers();
    }

 viewDetails(empId:number){
    this.router.navigate(['/customer', empId]);
    } 
}

