import { createSlice } from '@reduxjs/toolkit';
import * as operations from './contactsOperations';
import * as responceHandlers from './handleResponceActions';
import * as actionCheker from './checkAction';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        operations.fetchContacts.fulfilled,
        responceHandlers.handleFetchContactsFulfilled
      )
      .addCase(
        operations.addContact.fulfilled,
        responceHandlers.handleAddContactFulfilled
      )
      .addCase(
        operations.deleteContact.fulfilled,
        responceHandlers.handleDeleteContact
      )
      .addMatcher(actionCheker.isPendingAction, responceHandlers.handlePending)
      .addMatcher(
        actionCheker.isFulfilledAction,
        responceHandlers.handleFulfilled
      )
      .addMatcher(
        actionCheker.isRejectedAction,
        responceHandlers.handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
