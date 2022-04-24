import { ExpenseDataType } from "../../common/types/expensType";

export interface IAddExpense {
    readonly type: 'ADD_EXPENSE';
    payload: ExpenseDataType[];

}

export type ExpenseActions = IAddExpense