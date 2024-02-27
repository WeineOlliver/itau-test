import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordService } from '../services/password.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-test',
  templateUrl: './password-test.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  styleUrl: './password-test.component.less',
})
export class PasswordTestComponent {
  passForm: FormGroup;
  passwordIsValid: boolean;

  constructor(
    private fb: FormBuilder,
    private passwordService: PasswordService
  ) {
    this.passForm = this.fb.group({
      password: [''],
    });
    this.passwordIsValid = false;
  }

  checkPassword(password: string): void {
    this.passwordService.validatePassword(password).subscribe({
      next: (response) => {
        const { isValid } = response;
        if (!isValid) {
          this.passwordIsValid = false;
          this.passForm.get('password')?.setErrors({ apiError: true });
        } else {
          this.passForm.get('password')?.setErrors({ apiError: false });
          this.passwordIsValid = true;
        }
      },
      error: (e) => {
        console.error(e);
        this.passwordIsValid = false;
        this.passForm.get('password')?.setErrors({ apiError: true });
      },
      complete: () => console.info('Request to password complete'),
    });
  }

  submitForm() {
    const { password } = this.passForm.value;
    this.checkPassword(password);
  }
}
