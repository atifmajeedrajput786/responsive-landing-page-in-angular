import { Component } from '@angular/core';
import { BlogHeroComponent } from './blog-hero/blog-hero.component';
import { BlogMainComponent } from './blog-main/blog-main.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [BlogHeroComponent,BlogMainComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent {

}
