import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/http';
import {ResultAnime, ResultManga} from  './result.model';

@Injectable({
  providedIn: 'root'
})
export class AnimeMangaSearchApiService {

  apiUrl : string = "https://api.jikan.moe/v3/search";

  constructor(private httpClient : HttpClient) { }

  public getMangaResults(filterString){
    return this.httpClient.get<ResultManga>(`${this.apiUrl}/manga/?q=${filterString}`)
  }

  public getAnimeResults(filterString){
    return this.httpClient.get<ResultAnime>(`${this.apiUrl}/anime/?q=${filterString}`)
  }
}
