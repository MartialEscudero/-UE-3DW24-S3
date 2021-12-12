import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDelete } from 'src/app/models/user-delete.model';
import { environment } from '../../environments/environment';

const baseUrl = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

    constructor(private http: HttpClient) { }

    deleteUser(objUser: object) {
        console.log(objUser)
        return this.http.delete<UserDelete>(baseUrl +'/deleteuser', objUser);
    }
}