import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'button[appBtn], a[appBtn]',
  standalone: true
})
export class BtnDirective {
  @Input() baseClasses = 'text-white py-1 px-3 rounded cursor-pointer disabled:cursor-default inline-block';
  @Input() color = 'orange';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() textColor = 'white';
  @Input() fullWidth = false;

  public colorsMap: Record<string, string> = {
    orange: 'bg-orange-500 hover:bg-orange-400 active:bg-orange-500',
    yellow: 'bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-500',
    red: 'bg-red-500 hover:bg-red-400 active:bg-red-500',
    gray: 'bg-gray-400 hover:bg-gray-300 active:bg-gray-400',
    amber: 'bg-amber-400 hover:bg-amber-300 active:bg-amber-400',
  };

  public textColorsMap: Record<string, string> = {
    white: 'text-white',
    black: 'text-black',
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
    classes += ` ${this.textColorsMap[this.textColor]}`;

    return classes;
  }
}
