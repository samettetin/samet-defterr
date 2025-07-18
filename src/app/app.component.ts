import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(20px)' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('200ms ease-out', style({ opacity: 0, transform: 'translateX(-20px)' }))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const isDark = localStorage.getItem('dark-mode') === 'enabled';
    if (isDark) {
      document.body.classList.add('dark-mode');
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  toggleDarkMode(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    }
  }

  isDarkMode(): boolean {
    return localStorage.getItem('dark-mode') === 'enabled';
  }
}
