import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesOfferedPage } from './services-offered.page';

describe('ServicesOfferedPage', () => {
  let component: ServicesOfferedPage;
  let fixture: ComponentFixture<ServicesOfferedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesOfferedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
