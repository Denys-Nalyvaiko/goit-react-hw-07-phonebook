import { Global } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange, lime } from '@mui/material/colors';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyles } from 'css/GlobalStyles';
import { Container, Title, ContactsTitle } from './Container.styled';

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: lime,
  },
});

export const App = () => (
  <>
    <Global styles={GlobalStyles} />
    <Container>
      <ThemeProvider theme={theme}>
        <div>
          <Title>Phonebook</Title>
          <ContactForm />
        </div>
        <div>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter />
          <ContactList />
        </div>
      </ThemeProvider>
    </Container>
  </>
);
