import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import Button from '@mui/material/Button';
import ReactInputMask from 'react-input-mask';
import { addContact } from '../../redux/contacts/contactsOperations';
import { selectContacts } from '../../redux/contacts/selectContacts';
import { FormBox, TextInput } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const options = {
    name: setName,
    phone: setPhone,
  };
  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const handleFormSubmit = event => {
    event.preventDefault();

    const currentContact = { name, phone };
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
    setPhone('');
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
        mask="999-999-9999"
        maskChar=""
        value={phone}
        onChange={handleInputChange}
      >
        {() => (
          <TextInput
            label="Phone"
            variant="outlined"
            type="tel"
            name="phone"
            id={phoneInputId}
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
