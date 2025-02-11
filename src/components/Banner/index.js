import styles from "./Banner.module.css";
import Bannerzim from "./banner.jpg"

function Banner() {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('${Bannerzim}')` }}
    ></div>
  );
}

export default Banner;
