import styles from "./App.module.scss";
import logo from "../assets/logo.png";
import Home from "../pages/Home/Home";

function App() {
  return (
    <>
      <header className="container">
        <div className={styles.slogan}>
          <div className={styles.logoImg}>
            <img src={logo} alt="obs-logo" />
          </div>
          <div className={`${styles.obs} bold`}>OBS</div>
        </div>
        <nav>
          <ul>
            <li>
              <a className="light" href="/">Home</a>
            </li>
            {/* <li>
              <a className="light" href="">Service</a>
            </li> */}
            <li>
              <a className="light" href="https://www.linkedin.com/in/markwasfy00/" target="_blank">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.app}>
        <Home />
      </main>
      <footer className={"bold container"}>
        <div className={styles.signature}>MW.</div>
      </footer>
    </>
  )
}

export default App
