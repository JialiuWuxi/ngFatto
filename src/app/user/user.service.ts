import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getName():string{

    return "Test User";
  }
}
