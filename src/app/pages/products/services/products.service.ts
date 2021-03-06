import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private urlAPI = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlAPI);
  }

  updateStock(productId: number, stock: number): Observable<any> {
    const body = { stock: stock };
    return this.http.patch<any>(`${this.urlAPI}/${productId}`, body);
  }
}
