import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private httpClient : HttpClient ) { }

  apiUrl = `http://localhost:3000/api/videos?acess_token=x`

  public getAllVideos(){
    return this.httpClient.get<Video[]>(this.apiUrl)
  }

  public postVideo(videoPost : Video){
    console.log(videoPost);
    return this.httpClient.post<Video>(this.apiUrl, videoPost);
  }
}
