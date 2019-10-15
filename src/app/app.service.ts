import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IGridData {
  thumbnails: string;
  publishedAt: Date;
  title: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private http: HttpClient) {}
  getDataFromAPI(): Observable<any> {
      const url = 'https://www.googleapis.com/youtube/v3/search';
      const queryParams = '?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john';

      return this.http.get(`${url}${queryParams}`);
  }
}
