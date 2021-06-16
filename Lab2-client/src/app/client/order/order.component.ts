import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
import {OrderService} from '../../service/orderService/order.service';
import {ReceiptService} from "../../service/receiptService/receipt.service";
import {RedeptService} from "../../service/redeptService/redept.service";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  subscription: Subscription;
  buckwheat: string;
  rice: string;
  compote: string;
  cyberCutlet: string;

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private receiptService: ReceiptService,
              private router: Router,
              private redeptService: RedeptService) {
      this.subscription = this.route.queryParams.subscribe(params => {
          this.buckwheat = params.buckwheat;
          this.rice = params.rice;
          this.compote = params.compote;
          this.cyberCutlet = params.cyberCutlet;
      });
  }

  ngOnInit(): void {
  }

  checkCalculated() {
  }

}
