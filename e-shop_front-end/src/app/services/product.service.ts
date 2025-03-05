import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl: string = 'http://localhost:8888/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.apiUrl}/{id}`;
    return this.http.get<Product>(url);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(product: Product, id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Product>(url, product);
  }

  deleteProduct(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  searchProducts(searchTerm: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/search?searchTerm=${searchTerm}`
    );
  }

  filterByPrice(minPrice: number, maxPrice: number): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/filter/price?minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
  }

  filterByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/filter/category?categoryId=${categoryId}`
    );
  }
}
