import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spark-ui-card-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderComponent {}
