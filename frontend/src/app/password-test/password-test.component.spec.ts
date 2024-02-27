import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { PasswordTestComponent } from './password-test.component';
import { PasswordService } from '../services/password.service';
import { CommonModule } from '@angular/common';

describe('PasswordTestComponent', () => {
  let component: PasswordTestComponent;
  let fixture: ComponentFixture<PasswordTestComponent>;
  let passwordServiceSpy: jasmine.SpyObj<PasswordService>;

  beforeEach(waitForAsync(() => {
    passwordServiceSpy = jasmine.createSpyObj('PasswordService', [
      'validatePassword',
    ]);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, CommonModule], // Import the necessary modules here
      providers: [{ provide: PasswordService, useValue: passwordServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call checkPassword on form submission', () => {
    spyOn(component, 'checkPassword');
    component.submitForm();
    expect(component.checkPassword).toHaveBeenCalled();
  });

  it('should set passwordIsValid to true if password is valid', () => {
    const password = 'valid_password';
    const mockResponse = { isValid: true };
    passwordServiceSpy.validatePassword.and.returnValue(of(mockResponse));

    component.checkPassword(password);

    expect(component.passwordIsValid).toBe(true);
    expect(component.passForm.get('password')?.hasError('apiError')).toBe(
      false
    );
  });

  it('should set passwordIsValid to false and set apiError if password is invalid', () => {
    const password = 'invalid_password';
    const mockResponse = { isValid: false };
    passwordServiceSpy.validatePassword.and.returnValue(of(mockResponse));

    component.checkPassword(password);

    expect(component.passwordIsValid).toBe(false);
    expect(component.passForm.get('password')?.hasError('apiError')).toBe(true);
  });

  it('should set passwordIsValid to false and set apiError on API error', () => {
    const password = 'some_password';
    passwordServiceSpy.validatePassword.and.returnValue(of({ isValid: false }));
    spyOn(console, 'error');

    component.checkPassword(password);

    expect(component.passwordIsValid).toBe(false);
    expect(component.passForm.get('password')?.hasError('apiError')).toBe(true);
  });
});
