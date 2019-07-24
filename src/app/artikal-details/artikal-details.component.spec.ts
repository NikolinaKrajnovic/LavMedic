import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikalDetailsComponent } from './artikal-details.component';

describe('ArtikalDetailsComponent', () => {
  let component: ArtikalDetailsComponent;
  let fixture: ComponentFixture<ArtikalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
