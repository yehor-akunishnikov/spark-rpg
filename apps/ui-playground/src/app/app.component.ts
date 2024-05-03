import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ButtonComponent } from '@spark-rpg/ui-kit';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ui-playground';
}
