import styles from "./Home.module.scss"
import hero from "../../assets/obs-fiverr.png"

const Home = () => {
  return (
    <section className={`${styles.home} container`}>
      <div className={`${styles.heading} animate__animated animate__fadeIn`}>
        <h1 className={`${styles.title} bold`}>OBS Scripts & Automations</h1>
        <div className={styles.info}>
          <div className={`${styles.desc} bold`}>WEBSOCKETS_BROWSER-SOURCE</div>
        </div>
          <a href="https://www.fiverr.com/markwasfy/make-your-obs-widget-or-browser-source-scripts" target="_blank">
            <button className={`${styles.cta} xbold`}>GET IT NOW</button>
          </a>
      </div>
      <div className={`${styles.hero}`}>
        <img src={hero} alt="hero-section" />
      </div>
    </section>
  )
}

export default Home