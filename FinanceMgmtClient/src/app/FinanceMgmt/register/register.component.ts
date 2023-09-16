import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../Validators/password-validators';
@Component({
  selector: 'tests-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Accountinfo: FormGroup = this._ai.group({
  title: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    middleName: [''],
    mobileno: ['', [Validators.required,
    passwordValidator(10, 12)]],
    emailId: ['', [Validators.required,
    Validators.email]],
    aadhaarCardNumber: ['', [Validators.required
   ]],
    dob: [''],
    residentialAddressLine1: [''],
    residentialAddressLine2: [''],
    residentialLandmark: [''],
    residentialState: ['', [Validators.required]],
    residentialCity: ['', [Validators.required]],
    residentialPincode: ['', [Validators.required]],}
  )

  constructor(private _ai: FormBuilder) { }

  ngOnInit(): void {
  }

}
