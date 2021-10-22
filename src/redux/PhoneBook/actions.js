import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contact/addContact", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const removeContact = createAction("contact/removeContact");
const getFilteredName = createAction("contact/filteredContacts");

export { addContact, removeContact, getFilteredName };
