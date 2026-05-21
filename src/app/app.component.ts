import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProfileDetails';
  name = 'Ranjith';
  age = 26;
  role = 'Frontend Engineer';
  skills = 'angular/react'
}
