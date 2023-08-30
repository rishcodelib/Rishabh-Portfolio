import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LcService {
  url: string = 'https://leetcode-stats-api.herokuapp.com/iamrishabhh';

  constructor(private http: HttpClient) {}

  getAllData(): any {
    return this.http.get(this.url);
  }
}
