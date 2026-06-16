import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorExperiencedComponent } from './doctor-experienced.component';

describe('DoctorExperiencedComponent', () => {
  let component: DoctorExperiencedComponent;
  let fixture: ComponentFixture<DoctorExperiencedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorExperiencedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorExperiencedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
