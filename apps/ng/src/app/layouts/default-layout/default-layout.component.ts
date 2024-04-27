import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent {
}
