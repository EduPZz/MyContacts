import { Container, Header, DivisonLine, ListContainer, Card} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';

export default function ContactsLists(){
    return(
        <Container>
            <Header>
                <strong>3 contatos</strong>
                <a href='/'>Novo contato</a>
            </Header>

            <DivisonLine>
                <hr />
            </DivisonLine>

            <ListContainer>
                <header>
                    <button type='button' className="sort-button"> 
                        <span>Nome</span> 
                        <img src={arrow} alt='Arrow'/>
                    </button>
                </header>
            </ListContainer>

            <Card>
                
            </Card>
        </Container>
    );
}