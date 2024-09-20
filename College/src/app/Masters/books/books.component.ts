import { Component } from '@angular/core';
import { SidenavComponent } from "../../sidenav/sidenav.component";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

}
