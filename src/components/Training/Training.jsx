import { useState } from 'react'
import { Form, Table } from './components'

export const Training = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data') || '[]'))

  const addTraning = ({ date, distance }) => {
    const dataCopy = [...data]
    const sameObjI = dataCopy.findIndex(el => el.date === date)
    if (~sameObjI) {
      dataCopy[sameObjI].distance += +distance
    } else dataCopy.push({ date, distance: +distance })

    const result = dataCopy.sort((a, b) => {
      if (a.date > b.date) return 1
      return -1
    })

    setData(result)
    localStorage.setItem('data', JSON.stringify(result))
  }

  const deleteTraning = (date) => {
    const dataCopy = [...data]
    dataCopy.splice(dataCopy.findIndex(el => el.date === date), 1)
    setData(dataCopy)
    localStorage.setItem('data', JSON.stringify(dataCopy))
  }

  return (
    <div style={{ width: '570px' }}>
      <Form addTraning={addTraning} />
      <Table data={data} deleteTraning={deleteTraning} />
    </div>
  )
}