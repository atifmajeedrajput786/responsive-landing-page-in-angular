import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-service-hero',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './service-hero.component.html',
  styleUrl: './service-hero.component.css'
})
export class ServiceHeroComponent {

}
