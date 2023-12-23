import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'api/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await contactsApi.fetchContacts();
    return data;
  }
);
