import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Terminales } from 'src/app/Models/Terminales';
import { terminalesR3Data, terminalesMiniData } from 'src/app/data/terminalesData';
import { TerminalesService } from 'src/app/services/terminales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-terminales',
  templateUrl: './terminales.component.html',
  styleUrls: ['./terminales.component.css']
})
export class TerminalesComponent implements OnInit {

  //Estos terminales vienen del data ya no los ocuparemos de alli
  //terminalesR3 = terminalesR3Data
  //terminalesMini = terminalesMiniData

  //Estas variables se usan para trabajar con los terminales del service
  terminalesR3!: Terminales[]
  terminalesMini!: Terminales[]

//agregar router al constructor para usar navigate y redirigir
  constructor(
    private router: Router,
    private terminalesR3Service: TerminalesService,
    private terminalesMiniService: TerminalesService) 
  { }

  ngOnInit(): void {
    this.terminalesR3 = this.terminalesR3Service.obtenerTerminalesR3();
    this.terminalesMini = this.terminalesMiniService.obtenerTerminalesMini();

  }


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
