import { Container, InputSearchContainer, Header, DivisonLine, ListContainer, Card} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home(){
  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar pelo nome"/>
      </InputSearchContainer>

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
          <div className='info'>
              <div className='contact-name'>
                  <strong>Eduardo Pozzobom</strong>
                  <small>instagram </small>
              </div>
              <span>eduardo@bradial.com.br</span>
              <span>(19) 99999-9999</span>
          </div>

          <div className='actions'>
              <a href='/'>
                  <img src={edit} alt='Edit'/>
              </a>

              <button type='button'>
                  <img src={trash} alt='Delete'/>
              </button>
          </div>
      </Card>
      <Card>
          <div className='info'>
              <div className='contact-name'>
                  <strong>Eduardo Pozzobom</strong>
                  <small>instagram </small>
              </div>
              <span>eduardo@bradial.com.br</span>
              <span>(19) 99999-9999</span>
          </div>

          <div className='actions'>
              <a href='/'>
                  <img src={edit} alt='Edit'/>
              </a>

              <button type='button'>
                  <img src={trash} alt='Delete'/>
              </button>
          </div>
      </Card>
      <Card>
          <div className='info'>
              <div className='contact-name'>
                  <strong>Eduardo Pozzobom</strong>
                  <small>instagram </small>
              </div>
              <span>eduardo@bradial.com.br</span>
              <span>(19) 99999-9999</span>
          </div>

          <div className='actions'>
              <a href='/'>
                  <img src={edit} alt='Edit'/>
              </a>

              <button type='button'>
                  <img src={trash} alt='Delete'/>
              </button>
          </div>
      </Card>
    </Container>
)
}
