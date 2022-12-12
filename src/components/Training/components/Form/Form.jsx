import { useState } from "react";
import styles from './styles.module.css';

export const Form = ({ addTraning }) => {
  const [form, setForm] = useState({
    date: '',
    distance: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTraning(form)
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    let dataValue = value

    if (name === 'date') {
      dataValue = dataValue?.split('-')?.reverse()?.join('.')
    }

    setForm({
      ...form,
      [name]: dataValue
    })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="date" className={styles.label}>
        Дата(ДД.ММ.ГГГГ)
        <input
          className={styles.input}
          type="date"
          id="date"
          name='date'
          value={form.data}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="distance" className={styles.label}>
        Пройдено км
        <input
          className={styles.input}
          type="number"
          id="distance"
          name='distance'
          value={form.distance}
          onChange={handleChange}
          required
        />
      </label>

      <input
        className={`${styles.input} ${styles.input_btn}`}
        type="submit"
        value={'OK'}
      />
    </form>
  )
}