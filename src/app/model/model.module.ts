import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {StaticDataSource} from './static.datasource';
import {Cart} from './cart.model';
import {OrderRepository} from './order.repository';
import {Order} from './order';
import {RestDataSource} from './rest.datasource';
import {HttpModule} from '@angular/http';
import {AuthService} from './auth.service';

@NgModule({
  imports: [HttpModule],
  providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository, {
    provide: StaticDataSource,
    useClass: RestDataSource
  }, RestDataSource, AuthService]
})
export class ModelModule {
}
