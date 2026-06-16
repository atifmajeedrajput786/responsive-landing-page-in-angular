import { Component } from '@angular/core';
import { DoctorHeroComponent } from './doctor-hero/doctor-hero.component';
import { DoctorExperiencedComponent } from './doctor-experienced/doctor-experienced.component';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [DoctorHeroComponent,DoctorExperiencedComponent],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {

}
