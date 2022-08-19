import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
 })
 export class HeaderComponent implements OnInit {
  pageTitle: string = 'omnia store';
  cartProductList!: Product[];
  constructor(private cartService: CartService) {}
  calculate(cart: Product[]) {
    let sum = 0;
    cart.forEach((item) => {
      sum += Number(item.amount);
    });
    const ele = document.getElementById('cartAmount') as HTMLElement;
    ele.innerHTML = sum.toString();
  }

  ngOnInit(): void {
    this.cartProductList = this.cartService.getCartProduct();
    this.calculate(this.cartProductList);
  }

 
}
