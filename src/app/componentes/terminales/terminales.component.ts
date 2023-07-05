import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/Models/Cards';
import { Terminales } from 'src/app/Models/Terminales';

@Component({
  selector: 'app-terminales',
  templateUrl: './terminales.component.html',
  styleUrls: ['./terminales.component.css']
})
export class TerminalesComponent implements OnInit {
  
  constructor() {

  }

  terminales2: Terminales[] = [
    {
      id: 1,
      nombre: "Terminal Basico",
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      stock: 30,
      precioTerminal: 97500,
      descripcion: 'Descripcion Terminal Basico'

    },
    {
      id: 2,
      nombre: "Terminal 2",
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      stock: 10,
      precioTerminal: 87500,
      descripcion: 'Descripcion Terminal 2'

    },
    {
      id: 3,
      nombre: "Terminal 3",
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      stock: 25,
      precioTerminal: 57500,
      descripcion: 'Descripcion Terminal 3'

    },
    {
      id: 4,
      nombre: "Terminal 5",
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      stock: 40,
      precioTerminal: 27500,
      descripcion: 'Descripcion Terminal 5'

    }
  ]


  ngOnInit(): void {

  }

}
