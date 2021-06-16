import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getOrder } from '../../models/order.model';
import { OrderService } from '../../service/orderService/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  form: FormGroup = new FormGroup({
    buckwheatQuantity: new FormControl(),
    riceQuantity: new FormControl(),
    compoteQuantity: new FormControl(),
    cutletQuantity: new FormControl(),
  });

  constructor(private router: Router,
              private keycloakAngular: KeycloakService,
              private orderService: OrderService) { }

  ngOnInit(): void {
    try {
      this.keycloakAngular.loadUserProfile(true).then();
    } catch (e) {
      console.log('Failed to load user details');
    }
  }

  makeOrder() {
    // tslint:disable-next-line:max-line-length
    const buckwheat = this.form.get('buckwheatQuantity').value;
    const rice = this.form.get('riceQuantity').value;
    const compote = this.form.get('compoteQuantity').value;
    const cyberCutlet = this.form.get('cutletQuantity').value;
    const order = getOrder(buckwheat, rice, compote, cyberCutlet, '0');
    this.orderService.addOrder(order).subscribe(
        // tslint:disable-next-line:max-line-length
        _ => this.router.navigate(['/app-order'], { queryParams: { buckwheat, rice, compote, cyberCutlet }}),
        err => {
          console.log(err);
          alert(err.message);
        }
    );
  }
}
