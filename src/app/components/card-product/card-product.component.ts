import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card-product',
    templateUrl: './card-product.component.html',
    styleUrl: './card-product.component.scss'
})

export class CardProductComponent implements OnInit {

    soldOut: boolean = false;
    cantidad: number = 0;

    @Input() product = {
        name: 'Bike',
        price: 120,
        description: 'Product Description',
        inventory: 10,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }

    constructor(){}
    
    ngOnInit(){}

    addProduct() {
        if (this.cantidad < this.product.inventory){
          this.soldOut = false;
          this.cantidad++;
        } else {
          this.soldOut = true;
        }
      }

      removeProduct() {
        if (this.cantidad > 0) {
          this.soldOut = false;
          this.cantidad--;
        }
      }
}
