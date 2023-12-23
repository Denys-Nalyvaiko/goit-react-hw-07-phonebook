import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectContacts';
import { selectFilter } from '../../redux/filter/selectFilter';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import { Demo } from './ContactListDemo.styled';
import { InfoTitle } from 'components/Container.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const updateFilteredList = () => {
    const validFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(validFilter)
    );
  };

  const filteredContacts = updateFilteredList();
  const isListEmpty = !filteredContacts.length && !isLoading && !error;

  return (
    <>
      {isLoading && <InfoTitle>Loading ...</InfoTitle>}

      {isListEmpty && <InfoTitle>The contact list is empty</InfoTitle>}

      {filteredContacts && (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
          <Grid item xs={12} md={6}>
            <Demo>
              <List>
                {filteredContacts
                  .map(({ id, name, phone }) => (
                    <ContactItem key={id} id={id} name={name} phone={phone} />
                  ))
                  .toReversed()}
              </List>
            </Demo>
          </Grid>
        </Box>
      )}

      {error && !contacts.length && (
        <InfoTitle>Requets Error - {error}</InfoTitle>
      )}
    </>
  );
};
