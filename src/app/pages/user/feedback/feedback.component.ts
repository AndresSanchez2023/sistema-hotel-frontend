import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  constructor(private snackBar:MatSnackBar, private router:Router){

  }

  questions = [
    {
      text: "Como califica el proceso para realizar una reserva",
      options: [1, 3, 5],
      response: null
    },
    {
      text: "Como califica la atencion prestada por nuestros colaboradores",
      options: [1, 3, 5],
      response: null
    },
    {
      text: "Como califica nuestras instalaciones y servicios",
      options: [1, 3, 5],
      response: null
    },
  ];

  comment: string = '';

  onSubmit() {
    if (this.questions.every(q => q.response !== null) && this.comment.trim() !== '') {
      // Si todo está lleno, muestra la alerta y luego limpia el formulario
      Swal.fire('FeedBack Guardado','FeedBack Realizado con Exito con exito','success');
      this.resetForm();
      this.router.navigate(['home']);
    } else {
      // Si no, muestra un mensaje pidiendo completar todos los campos
      this.snackBar.open('Por favor, complete todos los campos.', 'Cerrar', { duration: 3000 });
    }
  }

  resetForm() {
    this.questions.forEach(q => q.response = null);
    this.comment = '';
  }
}
