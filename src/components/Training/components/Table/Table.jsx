import styles from './styles.module.css';

export const Table = ({ data, deleteTraning }) => (
  <>
    <div className={styles.tableHeader}>
      <div>Дата (ДД.ММ.ГГГГ)</div>
      <div>Пройдено км</div>
      <div>Действия</div>
    </div>

    <div className={styles.table}>
      {data.map(el => (
        <div style={{ display: 'flex', justifyContent: 'space-between' }} key={el.date}>
          <div>{el.date}</div>
          <div>{el.distance}</div>
          <div
            className={styles.deleteIcon}
            onClick={() => deleteTraning(el.date)}>✘</div>
        </div>
      ))}
    </div>
  </>
)