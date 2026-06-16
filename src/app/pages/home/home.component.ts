import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { AboutComponent } from '../../about/about.component';
import { BlogComponent } from '../../blog/blog.component';
import { BookingComponent } from '../../booking/booking.component';
import { ExperiencedComponent } from '../../experienced/experienced.component';
import { FeaturesComponent } from '../../features/features.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeroComponent } from '../../hero/hero.component';
import { MainComponent } from '../../main/main.component';
import { OurComponent } from '../../our/our.component';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { SpecialtyComponent } from '../../specialty/specialty.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent,BlogComponent,BookingComponent,ExperiencedComponent,FeaturesComponent,HeroComponent,MainComponent,OurComponent,ReviewsComponent,SpecialtyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

}
