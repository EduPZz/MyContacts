import { Container, InputSearchContainer } from "./styles";

import logo from '../../assets/images/Logo.svg'

export default function Header() {
    return(
        <Container>
            <img src={logo} width="201" alt="MyContacts"/>
            <InputSearchContainer>
                <input type="text" placeholder="Pesquisar pelo nome"/>
            </InputSearchContainer>
        </Container>
    );
}