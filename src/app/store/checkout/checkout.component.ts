import {Component} from '@angular/core';
import {OrderRepository} from '../../model/order.repository';
import {Order} from '../../model/order';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  private submitted: boolean = false;
  private orderSend: boolean = false;

  constructor(public repository: OrderRepository, public order: Order) { }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if(form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSend = true;
        this.submitted = true;
      });
    }
  }
}
