import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BanquetsPage } from './banquets.page';

describe('BanquetsPage', () => {
  let component: BanquetsPage;
  let fixture: ComponentFixture<BanquetsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BanquetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
