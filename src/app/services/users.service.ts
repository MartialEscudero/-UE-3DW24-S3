import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users.model';
import { environment } from '../../environments/environment';

const baseUrl = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Users[]>(baseUrl + 'users/');
    }

}
