import { Component, OnInit } from '@angular/core';
import { AppAbstractElement } from "../../abstract/abstract.element";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends AppAbstractElement implements OnInit {

  ngOnInit(): void {
  }

}
