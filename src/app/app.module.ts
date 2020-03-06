import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import {FormsModule} from '@angular/forms';
import { AnimeMangaSearchComponent } from './anime-manga-search/anime-manga-search.component';
import { VideoUrlComponent } from './video-url/video-url.component';

@NgModule({
  declarations: [
    AppComponent,
    ChuckNorrisComponent,
    AnimeMangaSearchComponent,
    VideoUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
