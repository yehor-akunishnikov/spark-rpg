import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDrawerComponent } from './svg-drawer.component';

describe('SvgDrawerComponent', () => {
  let component: SvgDrawerComponent;
  let fixture: ComponentFixture<SvgDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgDrawerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
