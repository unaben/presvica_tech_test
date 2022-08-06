import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useFetch from "../hooks/useFetch";

const RenderList = (props) => {
  const { show } = props;
  const [apiItems] = useFetch();
  const [contacts, setContacts] = useState([]);
  const [selectedName, setSelectedName] = useState("");

  const filteredName = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(selectedName.toLowerCase());
  });

  const handleDelete = (id) => {
    const updatedContact = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContact);
  };

  useEffect(() => {
    setContacts([...apiItems]);
  }, []);

  return (
    <div class="container">
      <div className="mb-3 d-flex ">
        <input
          type="text"
          id="items"
          placeholder="Enter name to filter..."
          value={selectedName}
          onChange={(e) => {
            setSelectedName(e.target.value);
          }}
        />
      </div>
      <table class="table table-bordered rounded">
        <thead class="table-dark">
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email Address</th>
            {/* {show && <th scope="col">Phone Number</th>} */}
            {/* {show && <th scope="col">Company Name</th>} */}
            <th scope="col"> Phone Number</th>
            <th scope="col">Company Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {filteredName &&
          filteredName.map((item) => (
            <tbody>
              <tr key={item.id}>
                <>
                  <th scope="row">{item.username}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  {/* {<td>{show && item.phone}</td>} */}
                  {/* {<td>{ show && item.company.name}</td>} */}
                  <td>{item.phone}</td>
                  <td>{item.company.name}</td>
                  <td>
                    <Button variant="outline-danger" className="mx-2">
                      Details
                    </Button>
                    <Button
                      variant="outline-danger"
                      type="click"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default RenderList;
