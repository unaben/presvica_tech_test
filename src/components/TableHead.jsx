import React from "react";

const TableHead = ({formValues}) => {
  return (
    <thead className="table-dark">
      <tr>
        <th scope="col">Username</th>
        <th scope="col">Full Name</th>
        <th scope="col">Email Address</th>
        {formValues.length !== 0 && <th scope="col"> Phone Number</th>}
        {formValues.length !== 0 && <th scope="col">Company Name</th>}
        <th scope="col">Actions</th>
      </tr>
    </thead>
  );
};

export default TableHead;
