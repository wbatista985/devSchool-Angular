import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  //prduct pode ser nullo por quasa do interrogação (?)
  //notação indicando quem chamar o componente pode passar o objeto 
  @Input()
  product?: Product;

  
  constructor() { }

  ngOnInit(): void {
  }
  //funçao para dispara evento de click (event binding)
   addToCart() {
     alert(`O produto ${this.product?.description} foi adicionado ao carrinho!`);
  }

  // getInstallmentProduct(price?: number) {
  //   if (price) return price / 10;
  //   return price;
  // }

  // getBilletPrice(price?: number) {
  //   if (price) return price * 0.95;
  //   return price;
  // }

}
