import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doctor-hero',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './doctor-hero.component.html',
  styleUrl: './doctor-hero.component.css'
})
export class DoctorHeroComponent {

}
