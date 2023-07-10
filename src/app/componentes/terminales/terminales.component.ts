import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Terminales } from 'src/app/Models/Terminales';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-terminales',
  templateUrl: './terminales.component.html',
  styleUrls: ['./terminales.component.css']
})
export class TerminalesComponent implements OnInit {

//agregar router al constructor para usar navigate y redirigir
  constructor(private router: Router) { }

  ngOnInit(): void {}


   //terminales2: Terminales[] = [ otra forma de colocar array de terminales
   terminalesR3: Array<Terminales> = [
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

  terminalesMini: Array<Terminales> = [
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

  eventoComprar(){

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha agregado el Producto al carrito',
      showConfirmButton: false,
      timer: 1500
    })


    setTimeout(() => {
      this.router.navigate(['/comprar']);
    }, 2000);
    

  }



}
