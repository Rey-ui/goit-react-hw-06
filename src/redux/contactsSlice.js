import { createSlice, nanoid } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initialState.js";
const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE.contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
    setContacts(state, action) {
      return action.payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
