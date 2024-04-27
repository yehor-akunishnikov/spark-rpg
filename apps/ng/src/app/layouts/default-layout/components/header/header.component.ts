import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgForOf,
    NgTemplateOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public readonly linksMeta: Record<string, {label: string, url: string}[]> = {
    mainNav: [
      {label: 'Home', url: '/home'},
      {label: 'Characters', url: '/characters'}
    ],
    authSection: [
      {label: 'Logout', url: '/auth/logout'}
    ]
  };
}
