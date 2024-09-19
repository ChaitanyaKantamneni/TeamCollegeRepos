import { Component } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
