import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    if (this.contactForm.valid) {
      emailjs
        .sendForm('service_79mp9bc', 'template_lb7yb0z', e.target as HTMLFormElement, 'aLGckq1KsJFYJ6E1m')
        .then(
          () => {
            Swal.fire({
              icon: 'success',
              title: 'Message Sent',
              text: 'Your message has been sent successfully.',
              confirmButtonText: 'OK'
            });
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'There was an error sending your message. Please try again later.',
              confirmButtonText: 'OK'
            });
          },
        );
    } else {
      this.contactForm.markAllAsTouched();
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Form',
        text: 'Please fill out all fields correctly.',
        confirmButtonText: 'OK'
      });
    }
  }
}