import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsConfigurationPageComponent } from './maps-configuration-page.component';

describe('MapsConfigurationPageComponent', () => {
  let component: MapsConfigurationPageComponent;
  let fixture: ComponentFixture<MapsConfigurationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapsConfigurationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapsConfigurationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
