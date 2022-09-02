import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  uri = environment.backendApi + '/user';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(this.uri);
  }
}
