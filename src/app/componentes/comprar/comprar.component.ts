import { Component, OnInit } from '@angular/core';
import { Terminales } from 'src/app/Models/Terminales';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent  implements OnInit {

  fecha: Date = new Date()

//Precio Terminales
terminales: Terminales[] = [
  {
    id: 1,
    nombre: "terminal Basico",
    image: 'https://redelcomventas.com/img/posLogo.jpg',
    stock: 20,
    precioTerminal: 97500,
    descripcion: 'Descripcion Terminal Basico'

  },
  {
    id: 2,
    nombre: "terminal 2",
    image: 'https://redelcomventas.com/img/posLogo.jpg',
    stock: 20,
    precioTerminal: 87500,
    descripcion: 'Descripcion Terminal 2'

  },
  {
    id: 3,
    nombre: "terminal 3",
    image: 'https://redelcomventas.com/img/posLogo.jpg',
    stock: 20,
    precioTerminal: 57500,
    descripcion: 'Descripcion Terminal 3'

  },
  {
    id: 4,
    nombre: "terminal 5",
    image: 'https://redelcomventas.com/img/posLogo.jpg',
    stock: 20,
    precioTerminal: 27500,
    descripcion: 'Descripcion Terminal 5'

  }
]

Precio!: number;
TOTAL!: number
IVA: number = 0.19;


constructor() {
  this.Precio = this.terminales[3].precioTerminal
}

ngOnInit(): void {

}

retornarValorTotal(){
  let precioTerminal = (this.terminales[3].precioTerminal) * (1 + this.IVA)
  return precioTerminal
}

retornarIVA(){
  let precioTerminalIVA = (this.terminales[3].precioTerminal) * (this.IVA)
  return precioTerminalIVA

}

 pagar(){
    alert("el valor a pagar es: $" + this.retornarValorTotal())
 }

}
