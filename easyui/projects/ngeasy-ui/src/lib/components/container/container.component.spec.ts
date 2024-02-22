import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuiContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: EuiContainerComponent;
  let fixture: ComponentFixture<EuiContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuiContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EuiContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
