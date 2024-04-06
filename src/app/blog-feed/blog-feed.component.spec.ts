import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFeedComponent } from './blog-feed.component';

describe('BlogFeedComponent', () => {
  let component: BlogFeedComponent;
  let fixture: ComponentFixture<BlogFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogFeedComponent]
    });
    fixture = TestBed.createComponent(BlogFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
