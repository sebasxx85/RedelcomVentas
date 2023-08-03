import { Injectable } from '@angular/core';
import { Terminales } from '../Models/Terminales';

@Injectable({
  providedIn: 'root'
})
export class TerminalesService {

     private terminalesR3Service: Terminales[] = [
    {
      id: 1,
      nombre: "Terminal R3",
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      stock: 47,
      precioTerminal: 99000,
      descripcion: 'Descripcion Terminal R3'

    },
    {
      id: 2,
      nombre: "Terminal R3",
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      stock: 15,
      precioTerminal: 87000,
      descripcion: 'Descripcion Terminal R3'

    },
    {
      id: 3,
      nombre: "Terminal R3",
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      stock: 25,
      precioTerminal: 97000,
      descripcion: 'Descripcion Terminal R3'

    },
    {
      id: 7,
      nombre: "Terminal R3",
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      stock: 8,
      precioTerminal: 99500,
      descripcion: 'Descripcion Terminal R3'

    }
  ]

     private terminalesMiniService: Terminales[] = [
    {
      id: 1,
      nombre: "Terminal Mini",
      image: 'https://redelcomventas.com/img/MiniPOS.JPG',
      stock: 27,
      precioTerminal: 19500,
      descripcion: 'Descripcion Terminal Mini'

    },
    {
      id: 2,
      nombre: "Terminal Mini",
      image: 'https://redelcomventas.com/img/MiniPOS.JPG',
      stock: 10,
      precioTerminal: 17000,
      descripcion: 'Descripcion Terminal Mini'

    },
    {
      id: 3,
      nombre: "Terminal Mini",
      image: 'https://redelcomventas.com/img/MiniPOS.JPG',
      stock: 19,
      precioTerminal: 17500,
      descripcion: 'Descripcion Terminal Mini'

    },
    {
      id: 4,
      nombre: "Terminal Mini",
      image: 'https://redelcomventas.com/img/MiniPOS.JPG',
      stock: 4,
      precioTerminal: 18000,
      descripcion: 'Descripcion Terminal Mini'

    }
  ]

  constructor() { }

  obtenerTerminalesR3(): Terminales[]{
    return this.terminalesMiniService
  }

  obtenerTerminalesMini(): Terminales[]{
    return this.terminalesR3Service

  }





}
