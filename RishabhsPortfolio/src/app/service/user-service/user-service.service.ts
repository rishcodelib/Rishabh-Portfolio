import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/entity/User/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  uri = environment.backendApi + '/user';
  auth = environment.backendApi;

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(this.uri);
  }

  createUser(user: User) {
    return this.http.post(this.uri, user);
  }

  getUser(id: String) {
    const payload = this.uri + '/' + id;
    return this.http.get(payload);
  }

  // signIn(user: User) {
  //   const payload = this.auth + '/signin';
  //   return this.http.post(payload, {
  //     email: user.email,
  //     password: user.password,
  //   });
  // }
}
