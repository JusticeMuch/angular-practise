import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimeMangaSearchApiService } from './anime-manga-search-api.service';

@Component({
  selector: 'app-anime-manga-search',
  templateUrl: './anime-manga-search.component.html',
  styleUrls: ['./anime-manga-search.component.css']
})
export class AnimeMangaSearchComponent implements OnInit {

  constructor(private searchApi : AnimeMangaSearchApiService) { }

  ngOnInit(): void {
    
  }

}
