import { Component } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-list',
  imports: [FormsModule],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {
  transactions: any[] = [];
  searchId: string = '';

  constructor(private transactionService: TransactionService) { }

  search(): void {
    if (this.searchId) {
      this.transactionService.getTransactionsById(this.searchId).subscribe(data => {
        this.transactions = data;
        console.log(this.transactions);
      });
    }
  }
}
