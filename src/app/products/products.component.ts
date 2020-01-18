import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  addProductToCart($event) {
    console.log("app.component");
    console.dir($event);
  }

}
