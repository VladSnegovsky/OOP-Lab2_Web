import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models/order.model';

@Injectable({
    providedIn: 'root'
})
export class PartService {

    constructor(private http: HttpClient) { }

    getOrderById(orderId: string) {
        return this.http.post<Order>(environment.partService, orderId);
    }
}
