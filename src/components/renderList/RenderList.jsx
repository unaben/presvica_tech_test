import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import useMultiFilter from "../hooks/useMultiFilter";
import List from "../list/List";

const RenderList = () => {
  const [contacts, setContacts] = useFetch();
  const [selectedName, setSelectedName] = useState("");
  const [multiFilter] = useMultiFilter(contacts, selectedName);

  const handleDelete = (id) => {
    const updatedContact = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContact);
  };

  return (
    <List
      selectedName={selectedName}
      setSelectedName={setSelectedName}
      handleDelete={handleDelete}
      contacts={contacts}
      multiFilter={multiFilter}
    />
  );
};

export default RenderList;
