import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;

const getFilteredName = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const lowerFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerFilter)
    );
  }
);

export { getContacts, getFilter, getFilteredName };
