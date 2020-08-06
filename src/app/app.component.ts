import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DetailsLinkComponent } from './employees/details-link/details-link.component';
import { first } from 'rxjs/internal/operators/first';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  currentUser: any;
 title="hi";
  
  
  isCollapsed: boolean;
  Userrole:string
  toggle1:boolean;
  toggle2:boolean;
  user:string;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
       
    }
      ngOnInit() {
        //this.Userrole=localStorage.getItem('User_role');
        //console.log(this.Userrole);
        //this.Userrole=this.authenticationService.getRole();
        if(this.currentUser!=null){
          //alert("you are logged out enter details to login");
          this.toggle1=true;
        }
      }
      login(){
        this.Userrole=localStorage.getItem('User_role');
        this.router.navigate(['/login']);
        console.log(this.Userrole);
       
     
      }
    logout() {
    if(this.currentUser===null){
      alert("you are logged out enter details to login");
      
    }
      localStorage.clear();
      this.toggle1=false;
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    } 
}
 

