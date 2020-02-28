import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeMangaSearchComponent } from './anime-manga-search.component';

describe('AnimeMangaSearchComponent', () => {
  let component: AnimeMangaSearchComponent;
  let fixture: ComponentFixture<AnimeMangaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeMangaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeMangaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
