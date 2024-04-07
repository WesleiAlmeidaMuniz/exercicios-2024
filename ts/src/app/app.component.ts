import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  myForm: FormGroup;
  showMessage: boolean = false;
  mostrarFormulario: boolean = false;
  mostrarTopico: boolean = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      assunto: ['', Validators.required],
      conteudo: ['', [Validators.required]]
    });
  }

  submitForm() {
    this.showMessage = true;
    this.mostrarFormulario = false;
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
    this.showMessage = false; 
  }

  toggleTopico(){
    this.mostrarTopico = !this.mostrarTopico;
  }
}