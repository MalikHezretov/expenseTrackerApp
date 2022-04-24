import { useSelector } from "react-redux";
import Expenses from "../../components/expenseContainer";
import { AppState } from "../../redux/reducers";

export default function ExpenseChart(): JSX.Element {
    const { expenses } = useSelector((state: AppState) => state.expenses);

    return <>
      <Expenses showChart items={expenses} />

    </>
}