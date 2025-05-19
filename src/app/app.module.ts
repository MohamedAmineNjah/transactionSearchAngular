import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AppRoutingModule } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TransactionService } from './service/transaction.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TransactionService, provideHttpClient(), provideHttpClientTesting()],
  bootstrap: [AppComponent]
})
export class AppModule { }