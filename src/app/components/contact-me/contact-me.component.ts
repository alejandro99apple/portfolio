import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import emailjs from 'emailjs-com';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  contactForm: FormGroup;
  isBrowser: boolean;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
    this.isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Código que accede a document solo se ejecuta en el navegador
      this.addClickEventToLinks();
    }
  }

  addClickEventToLinks(): void {
    // Ejemplo de código que accede a document
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        console.log('Link clicked');
      });
    });
  }

  public sendEmail(e: Event) {
    e.preventDefault();

   /*  if (this.contactForm.valid) {
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
          () => {
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
    } */
  }
}