import './styles.css';

interface Props {
    className: string
    children?: JSX.Element
}

const ExpenseCard = (props: Props) => {
    const {className, children} = props
    const classes = 'card ' + className;
    return <div className={classes}>{children}</div>
}


export default ExpenseCard;