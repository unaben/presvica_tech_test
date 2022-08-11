import React from "react";
import { Button } from "react-bootstrap";

const TableBody = (props) => {
  const { multiFilter, handleDelete, formValues } = props;
  return (
    <>
      {multiFilter.map((item, index) => (
        <tbody key={index}>
          <tr>
            <th scope="row">{item.username}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            {formValues.length !== 0 && <td>{item.phone}</td>}
            {formValues.length !== 0 && <td>{item.company.name}</td>}
            <td>
              <Button variant="outline-primary" className="mx-2">
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
          </tr>
        </tbody>
      ))}
    </>
  );
};

export default TableBody;
