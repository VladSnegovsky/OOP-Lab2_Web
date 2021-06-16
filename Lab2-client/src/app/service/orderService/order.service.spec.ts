import { TestBed } from '@angular/core/testing';
// @ts-ignore
import { OrderService } from './order.service';

describe('OrderService', () => {
    let service: OrderService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(OrderService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
