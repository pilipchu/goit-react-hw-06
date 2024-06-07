import { configureStore } from "@reduxjs/toolkit";

export const addContact = (value) => {
  return {
    type: "contacts/addContact",
    payload: { name: value.name, number: value.number, id: Date.now() },
  };
};

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/addContact": {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    }
    case "contacts/deleteContact": {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    }
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
