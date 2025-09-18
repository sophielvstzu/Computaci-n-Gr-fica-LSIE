import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputtextDemoComponent } from './inputtext-demo.component';

describe('InputtextDemoComponent', () => {
  let component: InputtextDemoComponent;
  let fixture: ComponentFixture<InputtextDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputtextDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputtextDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
