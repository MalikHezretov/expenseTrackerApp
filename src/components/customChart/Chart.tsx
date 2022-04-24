import ChartBar, { ChartBartProps } from "./ChartBar";
import "./Chart.css";

type Props = {
    dataPoints: ChartBartProps[]
}

const Chart = (props: Props) => {
  const {dataPoints} = props
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
