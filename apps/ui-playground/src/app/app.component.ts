import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

import { AlarmTextDirective, BtnDirective, CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent, InputDirective, InputGroupComponent } from '@spark-rpg/ui-kit';

@Component({
  standalone: true,
  imports: [RouterModule, BtnDirective, InputDirective, AlarmTextDirective, InputGroupComponent, ReactiveFormsModule, CardComponent, CardBodyComponent, CardHeaderComponent, CardFooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  inputGroupForm = new FormGroup({
    one: new FormControl('', [Validators.required]),
    two: new FormControl('', [Validators.required]),
    three: new FormControl('', [Validators.required]),
  });

  toggleColorTheme() {
    document.querySelector('html').classList.toggle('dark');
  }
}
