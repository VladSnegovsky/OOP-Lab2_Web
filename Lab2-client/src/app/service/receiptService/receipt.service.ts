import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receipt } from '../../models/receipt.model';

@Injectable({
    providedIn: 'root'
})
export class ReceiptService {

    constructor(private http: HttpClient) { }

    checkCalculated() {
        return this.http.get<string>(environment.receiptService);
    }

    addReceipt(receipt: Receipt) {
        return this.http.post<Receipt>(environment.receiptService, receipt);
    }
}
