import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

export enum TOAST_STATUSES {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR'
}

export interface ToastState {
  initialized: boolean;
  show: boolean;
  message: string;
  status: TOAST_STATUSES;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject$ = new BehaviorSubject<ToastState>({
    initialized: false,
    show: false,
    message: 'Something happened',
    status: TOAST_STATUSES.SUCCESS,
  });

  public toastState$: Observable<ToastState> = this.toastSubject$.asObservable();

  public showToast(status: TOAST_STATUSES, message: string, dismissTime = 5000): void {
    this.toastSubject$.next({...this.toastSubject$.value, show: true, message, status});

    if (dismissTime) {
      setTimeout(() => {
        this.dismissToast();
      }, dismissTime);
    }
  }

  public init(): void {
    this.toastSubject$.next({...this.toastSubject$.value, initialized: true});
  }

  public dismissToast(): void {
    this.toastSubject$.next({...this.toastSubject$.value, show: false});
  }
}
