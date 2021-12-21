import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  items = ['1','2','3','4'];
  addItem(newItem:string){
    this.items.push(newItem);
  }
  constructor() { }

  ngOnInit(): void {

  }


}
