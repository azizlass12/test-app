import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteLivreurComponent } from './compte-livreur.component';

describe('CompteLivreurComponent', () => {
  let component: CompteLivreurComponent;
  let fixture: ComponentFixture<CompteLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteLivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
