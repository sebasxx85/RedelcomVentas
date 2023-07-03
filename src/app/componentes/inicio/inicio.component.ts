import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  BotonComprar(){
    alert("No quedan unidades por ahora")
  }

  BotonConsultar(){
    alert("Nos pondremos en contacto contigo")
    //usar un nav para renviar al formulario
  }

}
