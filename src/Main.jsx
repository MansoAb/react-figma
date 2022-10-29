import styles from "./index.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.null}>
        <h1>0</h1>
      </div>
      <div className={styles.actions}>
        <h1 className={styles.increase}>Увеличить</h1>
        <h1 className={styles.decrease}>Уменшить</h1>
        <h1 className={styles.reset}>Сбросить</h1>
      </div>
    </div>
  );
};

export default Main;
