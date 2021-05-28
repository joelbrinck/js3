import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {
  
  contactForm!: FormGroup
  submitted = false

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    })
  }

  get controls(){
    return this.contactForm.controls
  }

  onSub() {
    console.log(this.contactForm.controls)
    this.submitted = true
    if (this.contactForm.invalid) {
      return
    }
    alert("Tack, återkommer så snart som möjligt!")
  }
}
