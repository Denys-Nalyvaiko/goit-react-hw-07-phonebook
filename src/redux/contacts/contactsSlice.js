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

const handleAddContactFulfilled = (state, { payload }) => {
  console.log('state: ', state);
  console.log('payload: ', payload);

  return {
    ...state,
    list: [{ ...payload }, ...state.list],
    isLoading: false,
    error: null,
  };
};

const handleDeleteContact = (state, { payload }) => ({
  ...state,
  list: state.list.filter(({ id }) => id !== payload.id),
  isLoading: false,
  error: null,
});

const handleRejected = (state, { error }) => ({
  ...state,
  error,
  isLoading: false,
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  // addContact: {
  //   reducer: (state, { payload }) => ({
  //     list: [{ ...payload }, ...state.list],
  //   }),
  //   prepare: contactInfo => ({ payload: { id: nanoid(), ...contactInfo } }),
  // },
  // removeContact: (state, action) => ({
  //   list: state.list.filter(({ id }) => id !== action.payload),
  // }),
  // },
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
