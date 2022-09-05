import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const ListComponent = (props) => {
  const {
    setSelectedName,
    selectedName,
    handleDelete,
    multiFilter,
    formValues,
    SelectedUserDetails,
  } = props;
  return (
    <div className="container">
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
      <table className="table table-bordered rounded">
        <TableHead formValues={formValues} />
        <TableBody
          handleDelete={handleDelete}
          multiFilter={multiFilter}
          formValues={formValues}
          SelectedUserDetails={SelectedUserDetails}
        />
      </table>
    </div>
  );
};

export default ListComponent;
