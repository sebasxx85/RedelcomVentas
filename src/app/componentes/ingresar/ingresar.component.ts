import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  usuarioPadre: string =  "" //variable para enviar compon cabecera
  passwordPadre: string = "" //solo uso en este componente

  //Este mensaje va en la funcion que toma el evento desde el hijo
  mensajeSalida: string = '';

  //trabajando como componente padre mandar info del usuario al comp cabecera
  constructor(){}
  
  ngOnInit(): void {
    
  } 

  //funcion saludar para enviar a Hijo
  funcionSaludarPadre() {
    return "Bienvenido" + this.usuarioPadre
  }

  manejoIngresar(){
    if (this.usuarioPadre != "" && this.passwordPadre != "" ) {
      alert("Ingreso correcto")
    } else {
      alert("Ingreso Incorrecto")
    }
    //colocar redirecion portal
    
  }

  //este el evento que maneja el ouput desde hijo al padre
  //el evento es el mensaje desde el hijo en este caso
  manejarEventoSalida(mensaje: string){
    this.mensajeSalida = mensaje

  }

}
