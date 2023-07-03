import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/Models/Cards';

@Component({
  selector: 'app-terminales',
  templateUrl: './terminales.component.html',
  styleUrls: ['./terminales.component.css']
})
export class TerminalesComponent implements OnInit {
  
  constructor() {

  }

  cards: Cards[] = [
    {
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      title: 'Terminal1',
      description: 'Descripcion Terminal1'

    },
    {
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      title: 'Terminal2',
      description: 'Descripcion Terminal2'

    },
    {
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      title: 'Terminal3',
      description: 'Descripcion Terminal3'

    },
    {
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      title: 'Terminal4',
      description: 'Descripcion Terminal4'

    }
  ]


  ngOnInit(): void {

  }

}
