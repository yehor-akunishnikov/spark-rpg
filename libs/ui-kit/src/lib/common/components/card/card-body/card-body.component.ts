import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spark-ui-card-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-body.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBodyComponent {}
