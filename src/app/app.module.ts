import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {StoreModule} from './store/store.module';
import {StoreComponent} from './store/store.component';
import {CheckoutComponent} from './store/checkout/checkout.component';
import {CartDetailComponent} from './store/cart-detail/cart-detail.component';
import {StoreFirstGuard} from './storeFirst.guard';
import {AdminModule} from './admin/admin.module';
import {AuthComponent} from './admin/auth/auth.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './admin/auth.guard';
import {ProductEditorComponent} from './admin/product-editor/product-editor.component';
import {ProductTableComponent} from './admin/product-table/product-table.component';
import {OrderTableComponent} from './admin/order-table/order-table.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule,
    AdminModule,
    RouterModule.forRoot([
      {path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard]},
      {path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard]},
      {path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard]},
      {
        path: 'admin',
        children: [
          {path: 'auth', component: AuthComponent},
          {
            path: 'main', component: AdminComponent, canActivate: [AuthGuard], children: [
            {path: 'products/:mode/:id', component: ProductEditorComponent},
            {path: 'products/:mode', component: ProductEditorComponent},
            {path: 'products', component: ProductTableComponent},
            {path: 'orders', component: OrderTableComponent},
            {path: '**', redirectTo: 'products'},
          ]
          },
          {path: '**', redirectTo: 'auth'}
        ],
        canActivate: [StoreFirstGuard]
      },
        { path: '**', redirectTo: '/store' }
    ]),
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
