import { Component } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { FormsModule } from '@angular/forms';
import { Transaction } from '../interfaces/Transaction';

@Component({
  selector: 'app-transaction-list',
  imports: [FormsModule],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})

// Define the TransactionListComponent class to manage and display a list of transactions
export class TransactionListComponent {
  // Array to store the list of transactions fetched from the service
  transactions: Transaction[] = [];
  searchId: string = '';

  // Inject the TransactionService via the constructor to access transaction-related methods
  constructor(private transactionService: TransactionService) { }

  // Method to search for transactions by ID
  search(): void {
    if (this.searchId) {
      this.transactionService.getTransactionsById(this.searchId).subscribe(data => {
        this.transactions = data;
        console.log(this.transactions);
      });
    }
  }
}
