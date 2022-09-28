import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly httpClient: HttpClient) { }

  getJoke(): Observable<any> {
    return this.httpClient.get('https://api.chucknorris.io/jokes/random');
  }
}
