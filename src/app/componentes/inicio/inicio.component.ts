import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  //agregar router al constructor para usar navigate y redirigir
  constructor(private router: Router){

  }

  ngOnInit(): void {
 
  }


  BotonComprar(){
    alert("Haz agregado el item al carrito de compras")
     //usar un nav para renviar a comprar
     this.router.navigate(['/comprar']);

  }

  BotonConsultar(){
    alert("Nos pondremos en contacto contigo")
    //usar un nav para renviar al formulario
    this.router.navigate(['/contacto']);
  }

}
