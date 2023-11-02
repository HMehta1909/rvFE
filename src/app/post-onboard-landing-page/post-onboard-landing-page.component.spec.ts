import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOnboardLandingPageComponent } from './post-onboard-landing-page.component';

describe('PostOnboardLandingPageComponent', () => {
  let component: PostOnboardLandingPageComponent;
  let fixture: ComponentFixture<PostOnboardLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostOnboardLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostOnboardLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
