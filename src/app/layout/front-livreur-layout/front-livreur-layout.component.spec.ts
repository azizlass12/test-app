import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontLivreurLayoutComponent } from './front-livreur-layout.component';

describe('FrontLivreurLayoutComponent', () => {
  let component: FrontLivreurLayoutComponent;
  let fixture: ComponentFixture<FrontLivreurLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontLivreurLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontLivreurLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
