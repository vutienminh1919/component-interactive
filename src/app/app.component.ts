import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'component-demo';
  user ={
    name : 'Minh111',
    email :'minh@gmail.com',
    phone : '1111111'
  }

}
