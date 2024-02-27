import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-test',
  templateUrl: './password-test.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrl: './password-test.component.less',
})
export class PasswordTestComponent {
  passForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passForm = this.fb.group({
      inputField: [''],
    });
  }

  submitForm() {
    console.log('Formulário enviado:', this.passForm.value);
  }
}
