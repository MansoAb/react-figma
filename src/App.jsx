import Footer from "./Footer";
import Main from "./Main";
import styles from "./index.module.css";
import Header from "./Header";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
