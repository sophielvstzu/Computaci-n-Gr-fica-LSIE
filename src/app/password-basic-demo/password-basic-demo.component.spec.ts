import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordBasicDemoComponent } from './password-basic-demo.component';

describe('PasswordBasicDemoComponent', () => {
  let component: PasswordBasicDemoComponent;
  let fixture: ComponentFixture<PasswordBasicDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordBasicDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordBasicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
