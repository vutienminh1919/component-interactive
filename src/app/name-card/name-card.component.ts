import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  @Input() name: string | undefined
  @Input() email: string | undefined;
  @Input() phone: string | undefined;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {
  }

}
