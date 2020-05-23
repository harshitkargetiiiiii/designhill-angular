import {Routes, RouterModule} from '@angular/router'
import { ProductsComponent } from './app/components/product-list/products/products.component'
import { CartproeuctComponent } from './app/components/cart/cartproeuct/cartproeuct.component'
import { CartcheckoutComponent } from './app/components/finalcart/cartcheckout/cartcheckout.component'

const routes : Routes = [
    {
        path: '', component: ProductsComponent
    },
    {
        path: 'products', component: ProductsComponent
    },
    {
        path:'cartsummary', component: CartproeuctComponent
    },
    {
        path:'checkout', component: CartcheckoutComponent
    },
    {
        path:'**', redirectTo:''
    }
]

export const routing = RouterModule.forRoot(routes)