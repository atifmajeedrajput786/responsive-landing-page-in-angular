import { Component } from '@angular/core';
import { ContactHeroComponent } from './contact-hero/contact-hero.component';
import { ContactFeedbackComponent } from './contact-feedback/contact-feedback.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactHeroComponent,ContactFeedbackComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
