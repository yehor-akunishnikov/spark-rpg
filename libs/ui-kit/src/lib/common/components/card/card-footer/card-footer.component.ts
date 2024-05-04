import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spark-ui-card-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardFooterComponent {}
