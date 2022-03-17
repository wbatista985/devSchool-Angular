import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'Home da Mjv school';

  numberOne = 50;

  dateToday = new Date();

  year = this.dateToday.getFullYear();

  price = 12.50;

  client = {
    nome: "wagner",
    sobrenome: "santos",
    email: "wagner@gmil"
  }

  products = [{
    id: 1,
    descricao: "notebook",
    price: 1000.00,
    imageUrl: "https://www.casasbahia-imagens.com.br/criacao/01-home/header-topo/2022/02-fev/25/slot-cat-pet.png"

  },
  {
    id: 2,
    descricao: "guarda roupa",
    price: 5000.00,
    imageUrl: "https://www.casasbahia-imagens.com.br/criacao/01-home/header-topo/2022/02-fev/25/slot-cat-pet.png"

  },
  {
    id: 3,
    descricao: "televisao",
    price: 2000.00,
    imageUrl: "https://www.casasbahia-imagens.com.br/criacao/01-home/header-topo/2022/02-fev/25/slot-cat-pet.png"

  }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
