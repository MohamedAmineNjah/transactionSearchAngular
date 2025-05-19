// Interface to define the shape of a Transaction object
export interface Transaction {
  primaryId: string;
  secondaryId: number;
  eventType: string;
  eventDate?: Date;
}