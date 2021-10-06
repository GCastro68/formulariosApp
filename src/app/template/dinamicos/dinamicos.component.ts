import { Component } from '@angular/core';

interface Favorito {
  id: number;
  nombre: string;
}

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Gustavo',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'DeathStranding' },
    ],
  };
  guardar() {}

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };
    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }
}
