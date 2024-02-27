import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PasswordService } from './password.service';

describe('PasswordService', () => {
  let service: PasswordService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PasswordService],
    });
    service = TestBed.inject(PasswordService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate password', () => {
    const mockResponse = { isValid: true };
    const password = 'your_password';

    service.validatePassword(password).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:3000/password-validator'
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ password });

    req.flush(mockResponse);
  });
});
