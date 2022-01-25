import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  constructor(
    private productsServices: ProductsService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.productsServices
      .getProducts()
      .pipe(tap((products: Product[]) => (this.products = products)))
      .subscribe();
  }

  addToCart(product: Product): void {
    console.log('Add to cart', product);
    this.shoppingCartService.updateCart(product);
  }
}
