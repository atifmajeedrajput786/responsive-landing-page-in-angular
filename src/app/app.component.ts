import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { OurComponent } from './our/our.component';
import { ExperiencedComponent } from './experienced/experienced.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,MainComponent,AboutComponent,BookingComponent,HeroComponent,FeaturesComponent,OurComponent,ExperiencedComponent,SpecialtyComponent,ReviewsComponent,BlogComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clone-app';
}
