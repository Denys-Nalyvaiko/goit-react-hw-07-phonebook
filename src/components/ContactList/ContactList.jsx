import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectContacts } from '../../redux/contacts/selectContacts';
import { selectFilter } from '../../redux/filter/selectFilter';
import { Demo } from './ContactListDemo.styled';
import { InfoTitle } from 'components/Container.styled';

export const ContactList = () => {
  const constacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const updateFilteredList = () => {
    const validFilter = filter.toLowerCase().trim();

    return constacts.filter(({ name }) =>
      name.toLowerCase().includes(validFilter)
    );
  };

  const filteredContacts = updateFilteredList();

  return (
    <>
      {!filteredContacts.length ? (
        <InfoTitle>The contact list is empty</InfoTitle>
      ) : (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
          <Grid item xs={12} md={6}>
            <Demo>
              <List>
                {filteredContacts.map(({ id, name, number }) => (
                  <ContactItem key={id} id={id} name={name} number={number} />
                ))}
              </List>
            </Demo>
          </Grid>
        </Box>
      )}
    </>
  );
};
