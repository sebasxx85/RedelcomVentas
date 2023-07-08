import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit{

  //obtener el input desde componenete login
  nombreUsuario: string = "nombreUsuario"

  ngOnInit(): void {

  }

}
