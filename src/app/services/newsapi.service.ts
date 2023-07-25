import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from '../interfaces/news-response';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  topHeadlinesUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getTopCountryHeadlines(
    countryCode: string, 
    category: string
    ):Observable<NewsResponse> {
    return this.http.get<NewsResponse>(this.topHeadlinesUrl+`country=${countryCode}&category=${category}&pageSize=10& apiKey=${environment.apiKey}`)
  }
}
