import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ResultAnime, ResultManga} from  './result.model';
import { HttpHeaders } from '@angular/common/http';

 const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
@Injectable({
  providedIn: 'root'
})
export class AnimeMangaSearchApiService {

 
  apiUrl : string = "https://api.jikan.moe/v3/search";

  constructor(private httpClient : HttpClient) { }

  public getMangaResults(filterString){
    return this.httpClient.get<ResultManga>(`${this.apiUrl}/manga/?q=${filterString}`, httpOptions)
  }

  public getAnimeResults(filterString){
    return this.httpClient.get<ResultAnime>(`${this.apiUrl}/anime/?q=${filterString}`, httpOptions)
  }
}
