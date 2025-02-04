import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'validateStoneCode', async: false })
export class ValidTransactionType implements ValidatorConstraintInterface {
  validate(transactionType: string): boolean {
    if (typeof transactionType === 'string') {
      if (transactionType !== 'DEBIT' && transactionType !== 'CREDIT') {
        return false;
      }
      return true;
    }
  }

  defaultMessage(): string {
    const message = 'Transaction type must be CREDIT or DEBIT';
    return message;
  }
}
