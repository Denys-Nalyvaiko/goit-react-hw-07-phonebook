import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import Button from '@mui/material/Button';
import ReactInputMask from 'react-input-mask';
import { addContact } from '../../redux/contacts/contactsSlice';
import { selectContacts } from '../../redux/contacts/selectContacts';
import { FormBox, TextInput } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const options = {
    name: setName,
    number: setNumber,
  };
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleFormSubmit = event => {
    event.preventDefault();

    const currentContact = { name, number };
    const isContactNameAlreadyExist = contacts.find(
      ({ name }) =>
        name.toLowerCase().trim() === currentContact.name.toLowerCase().trim()
    );

    if (isContactNameAlreadyExist) {
      Notify.failure('Contact with this name already exist');
      return;
    }

    dispatch(addContact(currentContact));
    reset();
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    options[name](value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormBox
      component="form"
      sx={{
        '& > :not(style)': {
          m: 1,
          width: '32ch',
          input: { color: '#f6d9b1' },
        },
      }}
      action="submit"
      onSubmit={handleFormSubmit}
    >
      <TextInput
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        id={nameInputId}
        value={name}
        required
        onChange={handleInputChange}
      />
      <ReactInputMask
        mask="999-99-99"
        maskChar=""
        value={number}
        onChange={handleInputChange}
      >
        {() => (
          <TextInput
            label="Number"
            variant="outlined"
            type="tel"
            name="number"
            id={numberInputId}
            required
          />
        )}
      </ReactInputMask>
      <Button variant="outlined" type="submit">
        Add contact
      </Button>
    </FormBox>
  );
};
