import Chart from "react-apexcharts"
import style from './Chart.module.css'
import { nanoid } from 'nanoid'

interface IProps {
    elem: {
        xaxis?: object,
        series?: any,
        labels?: object
    }
    ind: number
}

function ApexChart({ elem, ind }: IProps) {
    const correctInd = [0, 5];
    const withRenderErr = [1, 3, 6];
    const falseSeries = [4, 8];

    return (

        <div className={style.wrapper}>

            {ind === 2 && <Chart
                className={style.chart}
                options={{ ...elem.labels }}
                series={[{ data: [...elem.series], name: 'Series' }]}
            />}

            {ind === 7 && <Chart
                className={style.chart}
                options={{ ...elem.xaxis }}
                series={elem.series}
            />}

            {ind === 9 && Object.values(elem).map((elements, i) => <Chart
                className={[style.chart, style.chartArr].join(' ')}
                key={nanoid(3)}
                options={{ ...elements.xaxis }}
                series={elements.series}
            />)}

            {correctInd.includes(ind) && <Chart
                className={style.chart}
                options={elem.xaxis}
                series={elem.series}
            />}

            {falseSeries.includes(ind) && <Chart
                className={style.chart}
                options={{ ...elem.xaxis }}
                series={[elem.series]}
            />}

            {withRenderErr.includes(ind) && <Chart
                className={style.chart}
                options={elem.xaxis}
                series={elem.series}
            />}

        </ div>
    );
}

export default ApexChart
