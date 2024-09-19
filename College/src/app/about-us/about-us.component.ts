import { Component } from '@angular/core';
import { TopnavComponent } from "../topnav/topnav.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TopnavComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
