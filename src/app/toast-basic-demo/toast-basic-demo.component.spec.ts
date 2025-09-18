import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastBasicDemoComponent } from './toast-basic-demo.component';

describe('ToastBasicDemoComponent', () => {
  let component: ToastBasicDemoComponent;
  let fixture: ComponentFixture<ToastBasicDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastBasicDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastBasicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
