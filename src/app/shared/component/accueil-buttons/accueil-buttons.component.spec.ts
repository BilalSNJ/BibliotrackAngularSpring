import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilButtonsComponent } from './accueil-buttons.component';

describe('AccueilButtonsComponent', () => {
  let component: AccueilButtonsComponent;
  let fixture: ComponentFixture<AccueilButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilButtonsComponent]
    });
    fixture = TestBed.createComponent(AccueilButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
