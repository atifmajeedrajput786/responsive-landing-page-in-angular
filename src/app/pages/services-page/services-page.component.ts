import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceHeroComponent } from './service-hero/service-hero.component';
import { ServiceAboutComponent } from './service-about/service-about.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [ServiceHeroComponent,ServiceAboutComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css'
})
export class ServicesPageComponent {

}
