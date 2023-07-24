import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  topHeadlinesUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getTopCountryHeadlines(countryCode: string, category: string) {
    return this.http.get(this.topHeadlinesUrl+`country=${countryCode}&category=${category}&pageSize=10& apiKey=${environment.apiKey}`)
  }
}
