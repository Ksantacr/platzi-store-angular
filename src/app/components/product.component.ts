import { Product } from './../product.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {

  @Input() product: Product;
  @Output() productToCart:EventEmitter<any> = new EventEmitter();

  addToCart() {
    console.log("ProductComponent")
    this.productToCart.emit(this.product.id);
  }

}
