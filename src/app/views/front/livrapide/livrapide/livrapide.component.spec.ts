import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrapideComponent } from './livrapide.component';

describe('LivrapideComponent', () => {
  let component: LivrapideComponent;
  let fixture: ComponentFixture<LivrapideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrapideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrapideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
