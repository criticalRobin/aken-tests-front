import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrappingData } from './models/scrapping-data';
import { ScrappingService } from './scrapping.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  news: ScrappingData | null = null;
  private readonly newsService: ScrappingService = inject(ScrappingService);

  ngOnInit(): void {
    console.log('AppComponent initialized');
    this.newsService.getNews().subscribe((data) => {
      console.log(data);
      this.news = data;
    });
  }
}
