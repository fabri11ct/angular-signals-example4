import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../product';
import { Signal } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  allProducts: Product[] = [
    {id: 1, name: 'milk', price: 1.45},
    {id: 2, name: 'Bread', price: 3.90},
    {id: 3, name: 'Tomatoes', price: 2.20}
  ];


}
