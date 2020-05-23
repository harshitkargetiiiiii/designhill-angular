import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/product-list/products/products.component';
import { CartproeuctComponent } from './components/cart/cartproeuct/cartproeuct.component';
import { CartcheckoutComponent } from './components/finalcart/cartcheckout/cartcheckout.component';
import { routing } from 'src/app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartproeuctComponent,
    CartcheckoutComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
