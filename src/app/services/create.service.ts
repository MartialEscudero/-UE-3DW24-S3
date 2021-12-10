import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCreate } from 'src/app/models/user-create.model';
import { environment } from '../../environments/environment';

const baseUrl = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class CreateService {

    constructor(private http: HttpClient) { }

    postUser(objUser: object) {
        return this.http.post<UserCreate>(baseUrl +'/createuser', objUser);
    }
}
