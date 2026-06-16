import { Component } from '@angular/core';
import { BookingComponent } from '../../booking/booking.component';
import { ExperiencedComponent } from '../../experienced/experienced.component';
import { PageHeroComponent } from './page-hero/page-hero.component';
import { PageMainComponent } from './page-main/page-main.component';
import { PageFormComponent } from './page-form/page-form.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [PageFormComponent,PageHeroComponent,PageMainComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
