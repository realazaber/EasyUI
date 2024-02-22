import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuiButtonComponent } from './button.component';

describe('EuiButtonComponent', () => {
  let component: EuiButtonComponent;
  let fixture: ComponentFixture<EuiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuiButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EuiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
