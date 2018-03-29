import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {SPArouting} from './app.routing'

import {LoginComponent} from './components/login.component'
import {ContactListComponent} from './components/contactlist.component';
import  {AddContactComponent} from './components/addcontact.component';
import {ShowComponent} from './components/show.component';
import {ContributionRegistration} from './components/registration.component';
import {AlwaysAuthGuard} from './services/AlwaysAuthGuard';
import {EmployeeDetails} from './components/employeedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactListComponent,
    AddContactComponent,
    ShowComponent,
    ContributionRegistration,
    EmployeeDetails
  ],
  imports: [
    BrowserModule,FormsModule,SPArouting
  ],
  providers: [AlwaysAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
