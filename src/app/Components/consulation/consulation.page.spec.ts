import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsulationPage } from './consulation.page';

describe('ConsulationPage', () => {
  let component: ConsulationPage;
  let fixture: ComponentFixture<ConsulationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
