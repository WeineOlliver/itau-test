import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordTestComponent } from './password-test.component';

describe('PasswordTestComponent', () => {
  let component: PasswordTestComponent;
  let fixture: ComponentFixture<PasswordTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
