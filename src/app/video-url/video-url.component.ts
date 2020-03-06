import { Component, OnInit } from '@angular/core';
import { Video } from './video.model';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoService } from './video.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-video-url',
  templateUrl: './video-url.component.html',
  styleUrls: ['./video-url.component.css']
})

export class VideoUrlComponent implements OnInit {

  constructor(private _sanitizer: DomSanitizer, private videoDb : VideoService) { }

  public isCollapsed = false;
  public videoArray : Video[];
  public videoPost : Video = {description : "", title : "", url : ""};

  ngOnInit(): void {
    this.videoDb.getAllVideos().subscribe(val => this.videoArray = val);
  }

  getSafeVideoUrl (url : string){
    return this._sanitizer.bypassSecurityTrustResourceUrl(url.replace("watch", "embed"));
  }

  submitPost(f : NgForm){
    console.log(f.value.description);
    this.videoPost.description = f.value.description;
    this.videoPost.title = f.value.title;
    this.videoPost.url = f.value.url;
    this.videoDb.postVideo(this.videoPost).subscribe(val => console.log(val));
  }

  ngOnDestroy(): void {
  }
}
