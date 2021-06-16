import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAuthGuard } from './service/AppAuthGuard';
import { MenuComponent } from './client/menu/menu.component';
import { OrderComponent } from './client/order/order.component';
import { PriceComponent } from './client/price/price.component';
import { CalculateorderComponent} from './bigadmin/calculateorder/calculateorder.component';
import { NoordersComponent } from './bigadmin/noorders/noorders.component';


const routes: Routes = [
  {
    path: 'menu',
    canActivate: [AppAuthGuard],
    component: MenuComponent,
    data: { roles: ['client'] }
  },
  {
    path: 'app-order',
    canActivate: [AppAuthGuard],
    component: OrderComponent,
    data: { roles: ['client'] }
  },
  {
    path: 'price',
    canActivate: [AppAuthGuard],
    component: PriceComponent,
    data: { roles: ['client'] }
  },
  {
    path: 'calculateorder',
    canActivate: [AppAuthGuard],
    component: CalculateorderComponent,
    data: { roles: ['admin'] }
  },
  {
    path: 'noorders',
    canActivate: [AppAuthGuard],
    component: NoordersComponent,
    data: { roles: ['admin'] }
  },
  {
    path: '',
    canActivate: [AppAuthGuard],
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
