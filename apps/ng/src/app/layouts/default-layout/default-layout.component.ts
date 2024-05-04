import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent, MainComponent } from '@spark-rpg/ui-kit';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent {
}
