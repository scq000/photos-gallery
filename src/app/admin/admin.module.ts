import {RouterModule} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {AdminComponent} from './admin.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './auth.guard';
import {ProductTableComponent} from './product-table/product-table.component';
import {ProductEditorComponent} from './product-editor/product-editor.component';
import {OrderTableComponent} from './order-table/order-table.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [AuthGuard],
  declarations: [AuthComponent, AdminComponent, ProductTableComponent, ProductEditorComponent, OrderTableComponent]
})
export class AdminModule {
}
