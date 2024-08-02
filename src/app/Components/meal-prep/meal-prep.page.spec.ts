import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealPrepPage } from './meal-prep.page';

describe('MealPrepPage', () => {
  let component: MealPrepPage;
  let fixture: ComponentFixture<MealPrepPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPrepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
