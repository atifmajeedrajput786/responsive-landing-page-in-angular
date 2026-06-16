import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-our-hero',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './our-hero.component.html',
  styleUrl: './our-hero.component.css'
})
export class OurHeroComponent {

}
