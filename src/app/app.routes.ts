import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

export const routes: Routes = [
    {path: 'home', component: Home, title: 'Homepage'},
    {path: 'about', component: About, title: 'About Us'},
];
