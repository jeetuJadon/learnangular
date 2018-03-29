import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/login.component'
import {ContactListComponent} from './components/contactlist.component';
import  {AddContactComponent} from './components/addcontact.component';
import {ShowComponent} from './components/show.component';
import {AlwaysAuthGuard} from './services/AlwaysAuthGuard';
import {ContributionRegistration} from './components/registration.component';
import {EmployeeDetails} from './components/employeedetails.component';

export const customRoutes: Routes = [    
	{path:'',component:LoginComponent,canActivate: [AlwaysAuthGuard]},   
    {path: 'contacts',component: ContactListComponent},
    {path: 'newcontact', component: AddContactComponent},
    {path:'show/:selected',component:ShowComponent},
    {path : 'submitStudent' , component :ContributionRegistration},
    {path:'submitedStudents',component :EmployeeDetails},
    {path: 'mycontacts', redirectTo: 'contacts'}, // redirecting
    {path: '**', component: LoginComponent} //catch all = **    
];
export const SPArouting = RouterModule.forRoot(customRoutes);