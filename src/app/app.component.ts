import { Component } from '@angular/core';
import { PageEntry, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: PageEntry[] = [];

  constructor(private wikipediaService: WikipediaService) {}

  onSubmit(term: string) {
    this.wikipediaService.search(term)
      .subscribe((response: PageEntry[]) => {
        this.pages = response;
      })
  }
}
