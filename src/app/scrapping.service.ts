import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrappingData } from './models/scrapping-data';

@Injectable({
  providedIn: 'root',
})
export class ScrappingService {
  private apiUrl = 'http://127.0.0.1:8000/api/news/';

  private readonly http: HttpClient = inject(HttpClient);

  getNews(): Observable<ScrappingData> {
    return this.http.get<ScrappingData>(this.apiUrl);
  }
}
