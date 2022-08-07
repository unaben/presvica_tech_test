const useMultiFilter = (contactData, value) => {
  const multiFilter = contactData.filter((contact) => {
    console.log("OBject", Object.keys(contact));
    return Object.keys(contact).some((key) => {
      return contact[key]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase().trim());
    });
  });

  //   const filteredName = contacts.filter((contact) => {
  //     return contact.name.toLowerCase().includes(selectedName.toLowerCase());
  //   });

  console.log("useMulti", multiFilter);

  return [multiFilter];
};

export default useMultiFilter;
