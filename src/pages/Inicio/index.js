import Cabecalho from "components/Cabecalho";
import styles from "./Inicio.module.css";
import Rodape from "components/Rodape";
import Banner from "components/Banner";
import Titulo from "components/Titulo";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home"/>
      <Titulo>
        <h1>Filmes gratuitos para assistir no Youtube!</h1>
      </Titulo>
      <Rodape />
    </>
  );
}

export default Inicio;
