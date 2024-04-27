import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BtnDirective } from '../../common/directives/btn.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BtnDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  side = 3;

  private _roll(): Promise<boolean> {
    return new Promise(resolve => {
      const rollResult = Math.floor((Math.random() * 6) + 1);

      this.side = rollResult;

      setTimeout(() => {
        resolve(rollResult === 3);
      }, 2000);
    });
  }

  public roll() {
    this._roll().then(console.log);
  }
}
