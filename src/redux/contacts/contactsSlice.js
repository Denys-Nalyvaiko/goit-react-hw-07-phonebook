import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  list: [],
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
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
