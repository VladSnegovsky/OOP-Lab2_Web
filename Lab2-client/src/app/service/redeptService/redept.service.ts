import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receipt } from '../../models/receipt.model';
import { Order } from '../../models/order.model';

@Injectable({
    providedIn: 'root'
})
export class RedeptService {

    constructor(private http: HttpClient) { }

    checkPrice() {
        return this.http.get<Receipt>(environment.redeptService);
    }

    pay(receiptId: string) {
        return this.http.post<Receipt>(environment.redeptService, receiptId);
    }
}
