import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonGroupDemoComponent } from './radio-button-group-demo.component';

describe('RadioButtonGroupDemoComponent', () => {
  let component: RadioButtonGroupDemoComponent;
  let fixture: ComponentFixture<RadioButtonGroupDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioButtonGroupDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioButtonGroupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
