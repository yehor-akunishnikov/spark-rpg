import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface HeaderNavLink {
  url: string;
  text: string;
}

@Component({
  selector: 'spark-ui-header',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() links: HeaderNavLink[] = [];

  public isDark = true;

  public toggleColorMode(): void {
    document.querySelector('html')?.classList?.toggle('dark');
    this.isDark = !this.isDark;
  }
}
