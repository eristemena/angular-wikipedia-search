import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submit = new EventEmitter<string>();
  term: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(term: string): void {
    this.term = term;
  }

  onEnter(): void {
    this.submit.emit(this.term);
  }

}
