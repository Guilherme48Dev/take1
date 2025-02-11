import CabecalhoLink from "components/CabecalhoLink";
import logo from "./TAKE.png";
import styles from "./Cabecalho.module.css";
import { Link } from "react-router-dom";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo" />
      </Link>
      <nav>
        <CabecalhoLink url={"./"}>Home</CabecalhoLink>
        <CabecalhoLink url={"./Favoritos"}>Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
