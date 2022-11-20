import styles from "../styles/pages/Home.module.scss"
import Homeview from "../components/Home/Home"

export default function Home() {
  return (
    <>
      <header className={`${styles.header} container`}>
        <div className={styles.slogan}>
          <div className={styles.logoImg}>
            <img src={"/logo.png"} alt="obs-logo" />
          </div>
          <div className={`${styles.obs} bold`}>OBS</div>
        </div>
        <nav className={styles.navbar}>
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
        <Homeview />
      </main>
      <footer className={"bold container"}>
        <div className={styles.signature}>MW.</div>
      </footer>
    </>
  )
}
