import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontProfileLayoutComponent } from './front-profile-layout.component';

describe('FrontProfileLayoutComponent', () => {
  let component: FrontProfileLayoutComponent;
  let fixture: ComponentFixture<FrontProfileLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontProfileLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontProfileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
