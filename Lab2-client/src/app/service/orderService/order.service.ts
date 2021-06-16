import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order.model';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private http: HttpClient) { }

    addOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(environment.orderService, order);
    }

    getOrder() {
        return this.http.get<Order>(environment.orderService);
    }
}
