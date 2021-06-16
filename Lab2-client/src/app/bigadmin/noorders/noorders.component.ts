import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/orderService/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noorders',
  templateUrl: './noorders.component.html',
  styleUrls: ['./noorders.component.css']
})
export class NoordersComponent implements OnInit {

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit(): void {
  }

  refresh() {
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
              }
          }
      );
  }
}
