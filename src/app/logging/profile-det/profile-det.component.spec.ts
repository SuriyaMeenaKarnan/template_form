import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetComponent } from './profile-det.component';

describe('ProfileDetComponent', () => {
  let component: ProfileDetComponent;
  let fixture: ComponentFixture<ProfileDetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDetComponent]
    });
    fixture = TestBed.createComponent(ProfileDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
