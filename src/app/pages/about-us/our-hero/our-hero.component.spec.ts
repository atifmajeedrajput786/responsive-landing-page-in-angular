import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHeroComponent } from './our-hero.component';

describe('OurHeroComponent', () => {
  let component: OurHeroComponent;
  let fixture: ComponentFixture<OurHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
