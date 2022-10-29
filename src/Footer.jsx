import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.first}>
        <h1>Counter</h1>
        <h1>Партнерам</h1>
        <h1>Разработчикам</h1>
        <h1>Вакансии</h1>
      </div>
      <h1 className={styles.second}>ООО"интукод",2020</h1>
    </div>
  );
};

export default Footer;
