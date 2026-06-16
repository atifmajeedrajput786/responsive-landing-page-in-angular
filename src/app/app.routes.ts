import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path:'service',
    loadComponent: () => import('./pages/services-page/services-page.component').then(m => m.ServicesPageComponent)
  },
  {
    path:'doctor',
    loadComponent: () => import('./pages/doctor/doctor.component').then(m => m.DoctorComponent)
  },
  {
    path:'appointment',
    loadComponent: () => import('./pages/page/page.component').then(m => m.PageComponent)
  },
  {
    path:'blog',
    loadComponent: ()=> import('./pages/blog-page/blog-page.component').then(m => m.BlogPageComponent)
  },
  {
    path:'contact-us',
    loadComponent: ()=> import('./pages/contact-us/contact-us.component').then(m=>m.ContactUsComponent)
  }

];

