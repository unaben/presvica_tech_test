import React from "react";
import { Button } from "react-bootstrap";

const TableBody = (props) => {
  const { multiFilter, handleDelete, formValues, SelectedUserDetails } = props;

  return (
    <>
      {multiFilter.map((user, index) => (
        <tbody key={index}>
          <tr>
            <th scope="row">{user.username}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            {formValues.length !== 0 && <td>{user.phone}</td>}
            {formValues.length !== 0 && <td>{user.company.name}</td>}
            <td>
              <Button
                variant="outline-primary"
                className="m-3 p-2"
                onClick={() => SelectedUserDetails(user)}
              >
                Details
              </Button>
              <Button
                variant="outline-danger"
                className=" p-2"
                type="click"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      ))}
    </>
  );
};

export default TableBody;
