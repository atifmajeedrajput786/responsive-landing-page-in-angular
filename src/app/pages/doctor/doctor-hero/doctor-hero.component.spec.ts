import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorHeroComponent } from './doctor-hero.component';

describe('DoctorHeroComponent', () => {
  let component: DoctorHeroComponent;
  let fixture: ComponentFixture<DoctorHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
