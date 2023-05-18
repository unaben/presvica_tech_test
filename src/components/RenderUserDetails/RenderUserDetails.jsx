import React from "react";
import "./renderUserDetails.css";

const RenderUserDetails = ({ userInfo }) => {
  return (
    <div className="note">
      <h1>User Details</h1>
      <p>Username: {userInfo?.username} </p>
      <p>Full Name: {userInfo?.name} </p>
      <p>Email: {userInfo?.email} </p>
      <p>
        Address: {userInfo?.address.street}, {userInfo?.address.suite},
        {userInfo?.address.city}
      </p>
      <p>Phone Number: {userInfo?.phone} </p>
      <p>Company Name: {userInfo?.company?.name} </p>
    </div>
  );
};

export default RenderUserDetails;
