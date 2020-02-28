import { TestBed } from '@angular/core/testing';

import { AnimeMangaSearchApiService } from './anime-manga-search-api.service';

describe('AnimeMangaSearchApiService', () => {
  let service: AnimeMangaSearchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeMangaSearchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
