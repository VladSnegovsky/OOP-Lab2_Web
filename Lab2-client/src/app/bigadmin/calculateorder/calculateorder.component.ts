import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../service/orderService/order.service';
import { ReceiptService } from '../../service/receiptService/receipt.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// @ts-ignore
import { AddReceiptService } from '../../service/addReceiptService/addreceipt.service';
import { getReceipt } from '../../models/receipt.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-calculateorder',
  templateUrl: './calculateorder.component.html',
  styleUrls: ['./calculateorder.component.css']
})
export class CalculateorderComponent implements OnInit {
    subscription: Subscription;
    buckwheat: string;
    rice: string;
    compote: string;
    cyberCutlet: string;
    id: string;
    form: FormGroup = new FormGroup({
        price: new FormControl(Validators.required)
    });

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private receiptService: ReceiptService,
              private router: Router,
              private httpClient: HttpClient) {
      this.subscription = this.route.queryParams.subscribe(params => {
      this.buckwheat = params.buckwheat;
      this.rice = params.rice;
      this.compote = params.compote;
      this.cyberCutlet = params.cyberCutlet;
      this.id = params.id;
    });
  }

  ngOnInit(): void {
  }

    calculate() {
        const price = this.form.get('price').value;
        const receipt = getReceipt(this.id, price);
        this.receiptService.addReceipt(receipt).subscribe();
        this.router.navigateByUrl('/noorders');
    }
}
