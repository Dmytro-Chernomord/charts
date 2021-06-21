import Chart from "react-apexcharts"
import { nanoid } from 'nanoid'
import styles from './AllCharts.module.css'

interface IValues {
    series: object[],
    xaxis: object
}

export default function AllCharts({ data }: any) {
    const correctInd = [0, 1, 3, 5, 6]
    return (
        <div className={styles.allCharts}>
            {data.map((el: any, ind: number) => {
                if (correctInd.includes(ind)) {

                    return <Chart
                        className={styles.allCharts__item}
                        key={nanoid(3)}
                        options={el.xaxis}
                        series={el.series}
                    />
                }
                if (ind === 2) {
                    const series = [{ data: [...el.series], name: 'Series' }]

                    return <Chart
                        className={styles.allCharts__item}
                        key={nanoid(3)}
                        options={{ ...el.labels }}
                        series={series}
                    />
                }
                if (ind === 4 || ind === 8) {
                    const series = [el.series]

                    return <Chart
                        className={styles.allCharts__item}
                        key={nanoid(3)} options={{ ...el.xaxis }}
                        series={series}
                    />
                }
                if (ind === 7) {

                    return <Chart
                        height='200'
                        className={styles.allCharts__item}
                        key={nanoid(3)}
                        options={{ ...el.xaxis }}
                        series={el.series}
                    />
                }
                if (ind === 9) {
                    const arr: IValues[] = Object.values(el)

                    return arr.map(elements => {
                        return <Chart
                            className={styles.allCharts__item}
                            key={nanoid(3)}
                            options={{ ...elements.xaxis }}
                            series={elements.series}
                        />
                    })
                }
                return undefined
            })}
        </div>
    )
}
