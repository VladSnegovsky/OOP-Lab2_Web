import { AppAuthGuard } from './service/AppAuthGuard';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeycloakAngularModule, KeycloakService, KeycloakBearerInterceptor } from 'keycloak-angular';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { initializer } from 'src/utils/app-init';
import { LogoutComponent } from './logout/logout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MenuComponent } from './client/menu/menu.component';
import { OrderComponent } from './client/order/order.component';
import { PriceComponent } from './client/price/price.component';
import { PaidComponent } from './client/paid/paid.component';
import { CalculateorderComponent } from './bigadmin/calculateorder/calculateorder.component';
import { NoordersComponent } from './bigadmin/noorders/noorders.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    MenuComponent,
    OrderComponent,
    PriceComponent,
    PaidComponent,
    CalculateorderComponent,
    NoordersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true
    },
    {
      provide: AppAuthGuard
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakBearerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
