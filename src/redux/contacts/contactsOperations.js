import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'api/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await contactsApi.fetchContacts();
    return data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await contactsApi.addContact(contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await contactsApi.deleteContact(id);
    return data;
  }
);
