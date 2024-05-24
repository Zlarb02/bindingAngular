import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface User {
  img: string;
  lastname: string;
  firstname: string;
  age: number;
  citation: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bindingAngular';
  user: User;

  constructor() {
    this.user = {
      img: "https://picsum.photos/200",
      lastname: "Doe",
      firstname: "John",
      age: 30,
      citation: ""
    };
  }
}
