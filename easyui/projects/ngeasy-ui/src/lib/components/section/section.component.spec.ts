import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuiSectionComponent } from './section.component';

describe('SectionComponent', () => {
  let component: EuiSectionComponent;
  let fixture: ComponentFixture<EuiSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuiSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EuiSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
