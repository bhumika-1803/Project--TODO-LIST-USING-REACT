import styles from "./App.module.css";
import Todos from "./components/Todos";

function App() {
  

  return (
    <div className={styles.App}>
      <Todos />
    </div>
  );
}

export default App;
