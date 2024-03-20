import { AsyncPipe, isPlatformBrowser, NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { TOAST_STATUSES, ToastService } from './services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgSwitchCase,
    NgSwitch,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toastTrigger', [
      state('open', style({transform: 'translateY(0%)'})),
      state('close', style({transform: 'translateY(100%)'})),
      transition('open <=> close', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ToastComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  public toastService: ToastService = inject(ToastService);

  public TOAST_STATUSES = TOAST_STATUSES;

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.toastService.init();
    }
  }
}
