import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'button[appBtn], a[appBtn]',
  standalone: true
})
export class BtnDirective {
  @Input() baseClasses = 'text-white py-1 px-3 rounded cursor-pointer disabled:cursor-default';
  @Input() color: string = 'orange';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() fullWidth = false;

  public colorsMap: Record<string, string> = {
    orange: 'bg-orange-500 hover:bg-orange-400 active:bg-orange-500',
  };

  public sizesMap: Record<string, string> = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
  };

  @HostBinding('class') get class(): string {
    let classes = `${this.baseClasses}`;

    if (this.fullWidth) {
      classes += ' w-full';
    }

    classes += ` ${this.sizesMap[this.size]}`;
    classes += ` ${this.colorsMap[this.color]}`;

    return classes;
  }
}
