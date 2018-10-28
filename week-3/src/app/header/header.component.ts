import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'cm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input () headerText: string;

  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buttonClickedEvent(event) {
    this.buttonClicked.emit(this.headerText);
  }

  ngOnDestroy() {
    this.buttonClicked.unsubscribe();
  }
}
