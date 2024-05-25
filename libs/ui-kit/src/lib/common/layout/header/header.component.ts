import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'spark-ui-header',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  readonly links = [
    {
      url: '/home',
      text: 'Home'
    },
    {
      url: '/characters',
      text: 'Characters'
    },
    {
      url: '#',
      text: 'Dummy'
    }
  ];

  public isDark = true;

  public toggleColorMode(): void {
    document.querySelector('html')?.classList?.toggle('dark');
    this.isDark = !this.isDark;
  }
}
