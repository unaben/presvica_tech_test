import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import useMultiFilter from "../hooks/useMultiFilter";
import ListComponent from "./ListComponent";
import { useNavigate } from "react-router-dom";

const RenderList = ({ formValues, setUserInfo }) => {
  const [contacts, setContacts] = useFetch();
  const [selectedName, setSelectedName] = useState("");
  const [multiFilter] = useMultiFilter(contacts, selectedName);

  const handleDelete = (id) => {
    const updatedContact = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContact);
  };

  const navigate = useNavigate();

  const SelectedUserDetails = (userData) => {
    setUserInfo(userData);
    navigate("/details");
  };

  return (
    <ListComponent
      selectedName={selectedName}
      setSelectedName={setSelectedName}
      handleDelete={handleDelete}
      contacts={contacts}
      multiFilter={multiFilter}
      formValues={formValues}
      SelectedUserDetails={SelectedUserDetails}
    />
  );
};

export default RenderList;
