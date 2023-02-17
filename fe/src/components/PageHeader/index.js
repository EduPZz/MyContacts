import { Link } from "react-router-dom";

import { Container } from "./styles";

import arrow from '../../assets/images/icons/arrow.svg'

export default function PageHeader() {
  return (
    <Container>
      <Link to="/">
        <img src={arrow}/>
        <span>Voltar</span>
      </Link>
      <h1>Novo contato</h1>
    </Container>
  );
}
