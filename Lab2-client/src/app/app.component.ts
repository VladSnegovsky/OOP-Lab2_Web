import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { OrderService } from './service/orderService/order.service';
import { RedeptService } from './service/redeptService/redept.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lab2-client';

  constructor(private router: Router,
              private keycloakAngular: KeycloakService,
              private orderService: OrderService,
              private redeptService: RedeptService) { }

  ngOnInit(): void {
    const roles = this.keycloakAngular.getUserRoles();
    if (roles.includes('admin')) {
      this.orderService.getOrder().subscribe(
          resp => {
              // tslint:disable-next-line:triple-equals
              if (resp.buckwheatQuantity != '-1'){
                  const buckwheat = resp.buckwheatQuantity;
                  const rice = resp.riceQuantity;
                  const compote = resp.compoteQuantity;
                  const cyberCutlet = resp.cutletQuantity;
                  const id = resp.id;
                  this.router.navigate(['/calculateorder'], { queryParams: { buckwheat, rice, compote, cyberCutlet, id }});
              } else {
                  this.router.navigateByUrl('/noorders');
              }
          }
      );
    } else if (roles.includes('client')) {
        this.redeptService.checkPrice().subscribe(
            resp => {
                // tslint:disable-next-line:triple-equals
                if (resp.price != '-1') {
                    const orderId = resp.orderid;
                    const price = resp.price;
                    this.router.navigate(['/price'], { queryParams: { orderId, price }});
                } else {
                    this.router.navigateByUrl('/menu');
                }
            }
        );
    }
  }
}
