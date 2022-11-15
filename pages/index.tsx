import React from 'react'
import { useState, FormEvent, ChangeEvent } from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Card from '../components/Card'
import Chart from '../components/Chart'

import data from '../public/data/preguntas.json'
import respuestas from '../public/data/respuestas.json'

const res = respuestas.data

export default function Home() {
    const [formulario, setFormulario] = useState<{ [key: string]: string }>({})
    const [chartPoints, setChartPoints] = useState<number[]>([])
    const [diagnostico, setDiagnostico] = useState<string[]>([])
    const [isDisplayChart, setIsDisplayChart] = useState<boolean>(false)

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setFormulario(prevState => {
            return {
                ...prevState, [event.target.name]: event.target.value
            }
        })
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault()

        let chartPoints = []
        let diagnosticos = []
        let pensamiento = 0
        let innovacion = 0
        let gobernanza = 0
        let colaboracion = 0
        let optimizacion = 0
        let transparencia = 0

        for (let i = 1; i <= 10; i++) {
            if (formulario[i]) {
                pensamiento = pensamiento + +formulario[i]
            } else {
                toast.error(`por favor, ingrese las preguntas: (${i})`)
                return
            }
        }

        switch (true) {
            case pensamiento <= 3:
                diagnosticos.push(res[0].pensamiento![0])
                break
            case pensamiento > 3 && pensamiento <= 5:
                diagnosticos.push(res[0].pensamiento![1])
                break
            case pensamiento === 6:
                diagnosticos.push(res[0].pensamiento![2])
                break
            case pensamiento === 7:
                diagnosticos.push(res[0].pensamiento![3])
                break
            case pensamiento >= 8 && pensamiento <= 10:
                diagnosticos.push(res[0].pensamiento![4])
                break
            default:
                break
        }

        for (let i = 11; i <= 24; i++) {
            if (formulario[i]) {
                innovacion = innovacion + +formulario[i]

            } else {
                toast.error(`por favor, ingrese las preguntas: (${i})`)
                return
            }
        }

        switch (true) {
            case innovacion <= 5:
                diagnosticos.push(res[1].innovacion![0])
                break
            case innovacion >= 6 && innovacion <= 7:
                diagnosticos.push(res[1].innovacion![1])
                break
            case innovacion === 8:
                diagnosticos.push(res[1].innovacion![2])
                break
            case innovacion === 9:
                diagnosticos.push(res[1].innovacion![3])
                break
            case innovacion === 10:
                diagnosticos.push(res[1].innovacion![4])
                break
            default:
                break
        }

        for (let i = 25; i <= 34; i++) {
            if (formulario[i]) {
                gobernanza = gobernanza + +formulario[i]

            } else {
                toast.error(`por favor, ingrese las preguntas: (${i})`)
                return
            }
        }

        switch (true) {
            case gobernanza <= 3:
                diagnosticos.push(res[2].gobernanza![0])
                break
            case gobernanza >= 4 && gobernanza <= 5:
                diagnosticos.push(res[2].gobernanza![1])
                break
            case gobernanza === 6:
                diagnosticos.push(res[2].gobernanza![2])
                break
            case gobernanza === 7:
                diagnosticos.push(res[2].gobernanza![3])
                break
            case gobernanza >= 8 && gobernanza <= 10:
                diagnosticos.push(res[2].gobernanza![4])
                break
            default:
                break
        }

        for (let i = 35; i <= 53; i++) {
            if (formulario[i]) {
                colaboracion = colaboracion + +formulario[i]

            } else {
                toast.error(`por favor, ingrese las preguntas: (${i})`)
                return
            }
        }

        switch (true) {
            case colaboracion <= 6:
                diagnosticos.push(res[3].colaboracion![0])
                break
            case colaboracion >= 7 && colaboracion <= 10:
                diagnosticos.push(res[3].colaboracion![1])
                break
            case colaboracion === 11:
                diagnosticos.push(res[3].colaboracion![2])
                break
            case colaboracion >= 12 && colaboracion <= 13:
                diagnosticos.push(res[3].colaboracion![3])
                break
            case colaboracion === 14:
                diagnosticos.push(res[3].colaboracion![4])
                break
            default:
                break
        }

        for (let i = 54; i <= 66; i++) {
            if (formulario[i]) {
                optimizacion = optimizacion + +formulario[i]

            } else {
                toast.error(`por favor, ingrese las preguntas: (${i})`)
                return
            }
        }

        switch (true) {
            case optimizacion <= 4:
                diagnosticos.push(res[4].optimizacion![0])
                break
            case optimizacion >= 5 && optimizacion <= 7:
                diagnosticos.push(res[4].optimizacion![1])
                break
            case optimizacion === 8:
                diagnosticos.push(res[4].optimizacion![2])
                break
            case optimizacion === 9:
                diagnosticos.push(res[4].optimizacion![3])
                break
            case optimizacion === 10:
                diagnosticos.push(res[4].optimizacion![4])
                break
            default:
                break
        }

        for (let i = 67; i <= 78; i++) {
            if (formulario[i]) {
                transparencia = transparencia + +formulario[i]

            } else {
                toast.error(`por favor, ingrese las preguntas: (${i})`)
                return
            }
        }

        switch (true) {
            case transparencia <= 4:
                diagnosticos.push(res[5].transparencia![0])
                break
            case transparencia >= 5 && transparencia <= 6:
                diagnosticos.push(res[5].transparencia![1])
                break
            case transparencia === 7:
                diagnosticos.push(res[5].transparencia![2])
                break
            case transparencia === 8:
                diagnosticos.push(res[5].transparencia![3])
                break
            case transparencia === 9:
                diagnosticos.push(res[5].transparencia![4])
                break
            default:
                break
        }


        chartPoints.push(pensamiento, innovacion, gobernanza, colaboracion, optimizacion, transparencia)
        setChartPoints(chartPoints)
        setDiagnostico(diagnosticos)

        setIsDisplayChart(true)
    }

    if (isDisplayChart) {
        return <Chart puntos={chartPoints} diagnostico={diagnostico} />
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ToastContainer />

            <main className={styles.main}>
                <form onSubmit={submitHandler}>
                    {data.preguntas.map(item => (
                        <Card key={item.id}>
                            <p className={styles.titulo}>{item.tema}</p>
                            {item.preguntas.map((item) =>
                                <div key={item.id} className={styles.preguntas}>
                                    <p className={styles.preguntas}>{item.id} - {item.pregunta}</p>
                                    <div className={styles.radio}>
                                        <div>
                                            <label htmlFor={`${item.id}_si`}>Sí</label>
                                            <input type='radio' id={`${item.id}_si`} name={item.id} value={1} onChange={changeHandler} />
                                        </div>
                                        <div>
                                            <label htmlFor={`${item.id}_no`}>No</label>
                                            <input type='radio' id={`${item.id}_no`} name={item.id} value={0} onChange={changeHandler} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Card>
                    ))}

                    <button type="submit" className={styles.button}>Ingresar</button>
                </form>
            </main>
            <Chart puntos={chartPoints} diagnostico={diagnostico} />

        </div >
    )
}
