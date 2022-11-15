import styles from './Chart.module.css'

import {
    Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip,
    Legend
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const Chart = ({ puntos, diagnostico }) => {

    const dataChart = {
        labels: [
            'Pensamiento sistémico',
            'Innovación',
            'Gobernanza',
            'Colaboración',
            'Optimización del valor',
            'Transparencia'
        ],
        datasets: [
            {
                label: 'Radar',
                data: puntos,
                fill: true,
                backgroundColor: 'rgb(11, 224, 72, 0.4)',
                borderColor: '#18D17D',
                borderWidth: 2
            }
        ]
    }

    const options = {
        responsive: true,
        aspectRatio: 2,
        scales: {
            r: {
                ticks: {
                    stepSize: 0.5,
                },
                beginAtZero: true,
                pointLabels: {
                    color: '#BDBDBD',
                    font: {
                        weight: 'bold',
                        size: 12,
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'right',
                align: 'start',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'rectRounded',
                    boxWidth: 100,
                    font: {
                        weight: 'bold',
                    },
                },
            },
        },
    };
    return (
        <div className='w-1050 mx-auto mb-10'>
            <Radar
                data={dataChart}
                options={options}
            />
            <table className={styles.table}>
                <thead className={styles.header}>
                    <tr>
                        <th>Tema</th>
                        <th>Diagnóstico</th>
                    </tr>
                </thead>
                <tbody className={styles.body}>
                    <tr>
                        <td><p>Pensamiento sistémico</p></td>
                        <td>{diagnostico[0]}</td>
                    </tr>
                    <tr>
                        <td><p>Innovación</p></td>
                        <td>{diagnostico[1]}</td>
                    </tr>
                    <tr>
                        <td><p>Gobernanza</p></td>
                        <td>{diagnostico[2]}</td>
                    </tr>
                    <tr>
                        <td><p>Colaboración</p></td>
                        <td>{diagnostico[3]}</td>
                    </tr>
                    <tr>
                        <td><p>Optimización de Valor</p></td>
                        <td>{diagnostico[4]}</td>
                    </tr>
                    <tr>
                        <td><p>Transparencia</p></td>
                        <td>{diagnostico[5]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Chart
