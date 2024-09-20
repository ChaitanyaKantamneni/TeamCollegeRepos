import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmployeeComponent } from './Masters/employee/employee.component';
import { BooksComponent } from './Masters/books/books.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'contact-us',component:ContactusComponent},
    {path:'employees-details',component:EmployeeComponent},
    {path:'book-details',component:BooksComponent},
    {path:'',component:HomeComponent}
];
