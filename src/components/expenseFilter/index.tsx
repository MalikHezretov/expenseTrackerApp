import './styles.css';

interface Props {
    onFilterChange: (e: any) => void
    selected: string
}

const ExpensesFilter = (props: Props) => {
  const {onFilterChange, selected} = props
 
  const filterChangeHandler = (event: any) => {
    onFilterChange(event.target.value);
  }
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Expense year</label>
        <select value={selected} onChange={filterChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;