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
      const newState = state.filter((contact) => contact.id !== action.payload);
      return newState;
    },
    setContacts(state, action) {
      return action.payload;
    },
  },
});

export const { addContact, deleteContact, setContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
