import { createSlice, nanoid } from '@reduxjs/toolkit';
import * as operations from './contactsOperations';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => ({
        list: [{ ...payload }, ...state.list],
      }),
      prepare: contactInfo => ({ payload: { id: nanoid(), ...contactInfo } }),
    },

    removeContact: (state, action) => ({
      list: state.list.filter(({ id }) => id !== action.payload),
    }),
  },
  extraReducers: builder => {
    builder
      .addCase(operations.fetchContacts.pending, state => ({
        ...state,
        isLoading: true,
      }))
      .addCase(operations.fetchContacts.fulfilled, (state, { payload }) => ({
        ...state,
        list: [...payload],
        isLoading: false,
        error: null,
      }))
      .addCase(operations.fetchContacts.rejected, (state, { error }) => ({
        ...state,
        error,
        isLoading: false,
      }));
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
