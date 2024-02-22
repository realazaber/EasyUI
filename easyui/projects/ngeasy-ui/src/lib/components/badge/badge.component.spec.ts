import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuiBadgeComponent } from './badge.component';

describe('EuiBadgeComponent', () => {
  let component: EuiBadgeComponent;
  let fixture: ComponentFixture<EuiBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuiBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EuiBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
