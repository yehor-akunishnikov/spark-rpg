import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'spark-ui-header',
  standalone: true,
  imports: [CommonModule, RouterLinkActive],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  readonly links = [
    {
      url: '/',
      text: 'Home'
    },
    {
      url: '#',
      text: 'Dummy'
    },
    {
      url: '#',
      text: 'Dummy'
    }
  ];
}
