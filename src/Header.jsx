import styles from "./index.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Counter</h1>
      <div className={styles.info}>
        <h1>Главная</h1>
        <h1>О нас</h1>
        <h1>Контакты</h1>
      </div>
    </div>
  );
};

export default Header;
