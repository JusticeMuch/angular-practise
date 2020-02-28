import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ChuckNorrisApiService} from './chuck-norris-api.service';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {

  constructor(private ChuckApi : ChuckNorrisApiService) { }

  categories : any[] = [];
  jokes : string [] = [];
  
  ngOnInit(): void {
    this.ChuckApi.getChuckCategories().subscribe(val=> this.categories = val);
    
  }

  getJoke(f :NgForm){
    this.ChuckApi.getChuckJokeByCategory(f.value.category).subscribe(val=>this.jokes.push(val.value));
    console.log(this.jokes);
  }
}
