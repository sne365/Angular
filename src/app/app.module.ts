import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateCustomerComponent } from './employees/create-customer/create-customer.component';
import { SelectService } from './countrySelect.service';
import { CustomerService } from './employees/customer.service';
import { CustomerDetailsComponent } from './employees/customer-details/customer-details.component';
import { CanGaurdService } from './employees/can-gaurd.service';
import { customerFilterPipe } from './employees/customer-filter.pipe';
import { DisplayComponent } from './employees/display/display.component';
import { DetailsLinkComponent } from './employees/details-link/details-link.component';
import { OrderComponent } from './orders/order/order.component';
import { NavbarDetailsComponent } from './employees/navbar-details/navbar-details.component';
import { AllOrdersComponent } from './orders/all-orders/all-orders.component';
import { CardViewComponent } from './employees/card-view/card-view.component';
import { fakeBackendProvider, AuthGuard, JwtInterceptor, ErrorInterceptor } from './_helper';
//import { AuthenticationService } from './service/authentication.service';
import { LoginComponent } from './employees/login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthenticationService } from './service';




const appRoutes:Routes=[
  {path: 'MainCustomer',component: NavbarDetailsComponent,
  children:[
    {path: 'list',component: ListEmployeesComponent},
    {path: 'card',component: CardViewComponent},
    {path: 'edit/:id',component: CreateCustomerComponent,canDeactivate:[CanGaurdService],canActivate: [AuthGuard] }
  ],
},
{path:'all-orders',component:AllOrdersComponent},
  {path: 'list',component: ListEmployeesComponent},
  {path: 'edit/:id',component: CreateCustomerComponent,canDeactivate:[CanGaurdService],canActivate: [AuthGuard] },
  {path: 'customer/:id',component: CustomerDetailsComponent,
  children:[
    {path: 'order/:id',component:OrderComponent},
    {path: 'edit/:id',component:CreateCustomerComponent,canActivate: [AuthGuard]}, 
    //{path: 'detail/:id',component: DisplayComponent},
    {path: 'customerDetails/:id',component:DisplayComponent},
    ]
  },
  
  {path:'', redirectTo:'MainCustomer/list', pathMatch:'full',canActivate: [AuthGuard] }, 
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent}

  
];  

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    customerFilterPipe,
    DisplayComponent,
    DetailsLinkComponent,
    OrderComponent,
    NavbarDetailsComponent,
    AllOrdersComponent,
    CardViewComponent,
    LoginComponent,
    HomeComponent,
    UserDetailComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SelectService,CustomerService,CanGaurdService,fakeBackendProvider,AuthenticationService,DetailsLinkComponent,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],

     bootstrap: [AppComponent]
})
export class AppModule { }
