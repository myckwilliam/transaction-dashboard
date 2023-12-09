import { Pagination } from './pagination';
import { Transaction } from './transaction';
import { TransactionSummary } from './transaction-summary';

export interface TransactionData {
  summary: TransactionSummary;
  pagination: Pagination;
  items: Transaction[];
}
