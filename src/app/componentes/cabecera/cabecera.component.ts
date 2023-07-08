import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit{
   //trabajando como componente hijo, recibir info del comp ingresar

  //Obtener el input desde componenete login
  @Input() usuarioHijo!: string;

  //Obtener la funcion saludar desde comp padre
  @Input() funcionSaludar!: (args: string) => string;

  constructor(){}

  ngOnInit(): void {
   
  }

 saludarIngreso(){
  alert(this.funcionSaludar);
 }



}
