import { TestBed } from '@angular/core/testing';
// @ts-ignore
import { PartService } from './part.service';

describe('PartService', () => {
    let service: PartService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PartService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
