import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserUpdate } from 'src/app/models/user-update.model';
import { environment } from '../../environments/environment';

const baseUrl = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

    constructor(private http: HttpClient) { }

    updateUser(objUser: object) {
        return this.http.put<UserUpdate>(baseUrl +'/updateuser', objUser);
    }
}