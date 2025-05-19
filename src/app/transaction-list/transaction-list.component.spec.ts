import { TestBed } from '@angular/core/testing';
import {  HttpTestingController } from '@angular/common/http/testing';
import { TransactionService } from '../service/transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [TransactionService]
    });
    service = TestBed.inject(TransactionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch transactions by ID', () => {
    const dummyTransactions = [
      { primary_id: '8MHFNAuOGS', event_type: 'Reception', event_date: '2025-04-26T13:39:00' }
    ];

    service.getTransactionsById('8MHFNAuOGS').subscribe(transactions => {
      expect(transactions.length).toBe(1);
      expect(transactions).toEqual(dummyTransactions);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/transactions/8MHFNAuOGS');
    expect(req.request.method).toBe('GET');
    req.flush(dummyTransactions);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
