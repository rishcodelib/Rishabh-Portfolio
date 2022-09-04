import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/entity/User/user';
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

  createUser(user: User) {
    return this.http.post(this.uri, user);
  }

  signIn(user: User) {
    return this.http.post(this.uri, {
      email: user.email,
      password: user.password,
    });
  }
}
