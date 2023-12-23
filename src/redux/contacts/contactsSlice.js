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

const isPendingAction = action =>
  typeof action.type === 'string' && action.type.endsWith('/pending');

const isRejectedAction = action => action.type.endsWith('/rejected');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(operations.fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(operations.addContact.fulfilled, handleAddContactFulfilled)
      .addCase(operations.deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
