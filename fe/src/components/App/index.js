import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import ContactsLists from '../ContactsList';

import { Container } from './styles'; 

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsLists />
      </Container>
    </ThemeProvider>
  );
}

export default App;
