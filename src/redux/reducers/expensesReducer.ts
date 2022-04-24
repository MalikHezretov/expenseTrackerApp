import { ExpenseDataType } from "../../common/types/expensType";
import { ExpenseActions } from "../actions/ExpenseActions";
type ExpensesState = {
    expenses: ExpenseDataType[];
}
const initialState: ExpensesState = {
    expenses: [],
}
const expenseReducer = (state: ExpensesState = initialState, action: ExpenseActions) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            }
        default:
            return state;
    }
}
export default expenseReducer;