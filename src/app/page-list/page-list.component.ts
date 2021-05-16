import { Component, Input, OnInit } from '@angular/core';
import { PageEntry } from '../wikipedia.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  @Input() pages: PageEntry[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
