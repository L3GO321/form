import { useState } from "react";
import styles from './styles.module.css';

export const Form = ({ addTraning }) => {
  const [form, setForm] = useState({
    date: '',
    distance: ''
  });

  const [dateValid, isDateValid] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.date && form.distance && dateValid) addTraning(form)
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'date') {
      isDateValid(/^[\d]{2}.[\d]{2}.[\d]{4}$/.test(value) ? true : false)
    }

    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="date" className={styles.label}>
        Дата(ДД.ММ.ГГГГ)
        <input
          className={styles.input}
          style={{ borderColor: dateValid ? 'black' : 'red' }}
          type="text"
          id="date"
          name='date'
          value={form.data}
          onChange={handleChange}
        />
        {!dateValid && <div className={styles.valid}>Неверный формат даты</div>}
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
        />
      </label>

      <input
        className={`${styles.input} ${styles.input_btn}`}
        type="submit"
        value={'OK'}
        disabled={!form.date || !form.distance || !dateValid}
      />
    </form>
  )
}