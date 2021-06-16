import { TestBed } from '@angular/core/testing';
// @ts-ignore
import { RedeptService } from './redept.service';

describe('RedeptService', () => {
    let service: RedeptService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RedeptService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
