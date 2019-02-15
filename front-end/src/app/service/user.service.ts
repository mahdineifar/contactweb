import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>("http://localhost:8081/users");
    }

    getById(id: number) {
        return this.http.get(`http://localhost:8081/user/${id}`);
    }

    register(user: User) {
        return this.http.post("http://localhost:8081/api/auth/signup", user);
    }

    /* update(user: User) {
        return this.http.put(`${config.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    } */
}
