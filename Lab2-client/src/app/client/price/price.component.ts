import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../service/orderService/order.service';
import { ReceiptService } from '../../service/receiptService/receipt.service';
import { RedeptService } from '../../service/redeptService/redept.service';
import { PartService } from '../../service/partService/part.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  subscription: Subscription;
  orderId: string;
  price: string;
  buckwheat: string;
  rice: string;
  compote: string;
  cyberCutlet: string;

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private receiptService: ReceiptService,
              private router: Router,
              private partService: PartService,
              private redeptService: RedeptService) {
    this.subscription = this.route.queryParams.subscribe(params => {
      this.orderId = params.orderId;
      this.price = params.price;
    });
  }

  ngOnInit(): void {
    this.partService.getOrderById(this.orderId).subscribe(
        resp => {
            // tslint:disable-next-line:triple-equals
            if (resp.buckwheatQuantity == '-1'){
                this.buckwheat = '-1';
                this.rice = '-1';
                this.compote = '-1';
                this.cyberCutlet = '-1';
            } else {
                this.buckwheat = resp.buckwheatQuantity;
                this.rice = resp.riceQuantity;
                this.compote = resp.compoteQuantity;
                this.cyberCutlet = resp.cutletQuantity;
            }
        }
    );
  }

    pay() {
        this.redeptService.pay(this.orderId).subscribe();
        this.router.navigateByUrl('/menu');
    }
}
