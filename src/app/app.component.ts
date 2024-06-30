import { Component } from '@angular/core';
import { ClienteService } from './api/cliente.service';
import { ClienteDTO } from './model/clienteDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clients-app';
  cliente: ClienteDTO = {
    nombre: '',
    apellido: ''
  };

  constructor(private clienteService: ClienteService) {}

  onSubmit(): void {
    this.clienteService.createClient(this.cliente).subscribe(response => {
      console.log('Cliente añadido:', response);
      this.resetForm();
    }, error => {
      console.error('Error añadiendo cliente:', error);
    });
  }

  resetForm(): void {
    this.cliente = {
      nombre: '',
      apellido: ''
    };
  }
}
