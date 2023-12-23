import { createSlice } from '@reduxjs/toolkit';
import * as operations from './contactsOperations';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

const handlePending = state => ({
  ...state,
  isLoading: true,
});

const handleFetchContactsFulfilled = (state, { payload }) => ({
  ...state,
  list: [...payload],
  isLoading: false,
  error: null,
});

const handleAddContactFulfilled = (state, { payload }) => ({
  ...state,
  list: [...state.list, { ...payload }],
  isLoading: false,
  error: null,
});

const handleDeleteContact = (state, { payload }) => ({
  ...state,
  list: state.list.filter(({ id }) => id !== payload.id),
  isLoading: false,
  error: null,
});

const handleRejected = (state, { payload }) => ({
  ...state,
  error: payload,
  isLoading: false,
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(operations.fetchContacts.pending, handlePending)
      .addCase(operations.fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(operations.fetchContacts.rejected, handleRejected)
      .addCase(operations.addContact.pending, handlePending)
      .addCase(operations.addContact.fulfilled, handleAddContactFulfilled)
      .addCase(operations.addContact.rejected, handleRejected)
      .addCase(operations.deleteContact.pending, handlePending)
      .addCase(operations.deleteContact.fulfilled, handleDeleteContact)
      .addCase(operations.deleteContact.rejected, handleRejected);
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
