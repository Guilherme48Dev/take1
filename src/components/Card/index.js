import { useFavoritoContext } from "components/contextos/Favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <div className={styles.favorito}>
        <img
          src={icone}
          alt="Favoritar filme"
          className={styles.favoritar}
          onClick={() => {
            adicionarFavorito({ id, titulo, capa });
          }}
        />
        <p
          onClick={() => {
            adicionarFavorito({ id, titulo, capa });
          }}
        >
          Salvar
        </p>
      </div>
    </div>
  );
}

export default Card;
