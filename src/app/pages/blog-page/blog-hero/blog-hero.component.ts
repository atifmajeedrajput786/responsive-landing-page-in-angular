import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog-hero',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './blog-hero.component.html',
  styleUrl: './blog-hero.component.css'
})
export class BlogHeroComponent {

}
