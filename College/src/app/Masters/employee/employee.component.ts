import { Component } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [SidenavComponent,NgFor,NgIf],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  Countries: string[] = ['India', 'South Africa']; // Fixed array declaration
  selectedOption: string | undefined;

  onSelect(event: Event) {
    const target = event.target as HTMLSelectElement; // Type the event target
    this.selectedOption = target.value; // Now target.value is recognized
    console.log('Selected:', this.selectedOption);
  }

  States: string[] = ['India', 'South Africa']; // Fixed array declaration
  selectedState: string | undefined;

  onStateSelect(event: Event) {
    const target = event.target as HTMLSelectElement; // Type the event target
    this.selectedOption = target.value; // Now target.value is recognized
    console.log('Selected:', this.selectedOption);
  }
  


}
