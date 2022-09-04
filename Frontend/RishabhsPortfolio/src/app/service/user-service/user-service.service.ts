import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { User } from 'src/app/entity/user/user';
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
  createUser(user:any) {
    return this.http.post(this.uri,user);

    }
  }
}
