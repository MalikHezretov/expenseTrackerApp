import './ChartBar.css';

export type ChartBartProps = {
    value: number
    maxValue?: number
    label: string
}

const ChartBar = (props: ChartBartProps) => {
    const {maxValue, value, label} = props
    let barFillHeight = '0%';

    if(maxValue && maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100).toString() + '%';
    }

    return <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
        </div>
        <div className='chart-bar__label'>{label}</div>
    </div>
};

export default ChartBar;