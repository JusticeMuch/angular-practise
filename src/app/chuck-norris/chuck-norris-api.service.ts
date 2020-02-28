import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ChuckNorris} from './chuck-norris.model';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisApiService {

  apiUrl : string  = 'https://api.chucknorris.io/jokes';

  constructor(private httpClient : HttpClient) {}

  public getChuckCategories(){
    return this.httpClient.get<any[]>(`${this.apiUrl}/categories`);
  }

  public getChuckJokeByCategory(category: string){
    if (category == '')
      return this.httpClient.get<ChuckNorris>(`${this.apiUrl}/random`);
    return this.httpClient.get<ChuckNorris>(`${this.apiUrl}/random?category=${category}`);
  }

}
