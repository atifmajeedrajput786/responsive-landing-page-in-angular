import { Component } from '@angular/core';
import { OurHeroComponent } from './our-hero/our-hero.component';
import { BookingComponent } from '../../booking/booking.component';
import { OurComponent } from '../../our/our.component';
import { ScoreComponent } from './score/score.component';
import { SpecialtyComponent } from '../../specialty/specialty.component';
import { ExperiencedComponent } from '../../experienced/experienced.component';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { OurSpecialtyComponent } from './our-specialty/our-specialty.component';
import { MainComponent } from '../../main/main.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [OurHeroComponent,BookingComponent,MainComponent,OurComponent,ScoreComponent,ExperiencedComponent,ReviewsComponent,OurSpecialtyComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
