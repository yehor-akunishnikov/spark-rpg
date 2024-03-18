import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent {

}
