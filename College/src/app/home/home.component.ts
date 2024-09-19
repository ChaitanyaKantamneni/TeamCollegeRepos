import { Component } from '@angular/core';
import { TopnavComponent } from '../topnav/topnav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopnavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
