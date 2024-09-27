import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectinMenuComponent } from './multiple-selectin-menu.component';

describe('MultipleSelectinMenuComponent', () => {
  let component: MultipleSelectinMenuComponent;
  let fixture: ComponentFixture<MultipleSelectinMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleSelectinMenuComponent]
    });
    fixture = TestBed.createComponent(MultipleSelectinMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
