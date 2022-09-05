import React from "react";
import "../renderUserDetails.styles.css";

const RenderUserDetails = ({ userInfo }) => {
  console.log("user:", userInfo);
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

// {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …}
// address: {street: 'Victor Plains', suite: 'Suite 879', city: 'Wisokyburgh', zipcode: '90566-7771', geo: {…}}
// company: {name: 'Deckow-Crist', catchPhrase: 'Proactive didactic contingency', bs: 'synergize scalable supply-chains'}
// email: "Shanna@melissa.tv"
// id: 2
// name: "Ervin Howell"
// phone: "010-692-6593 x09125"
// username: "Antonette"
// website: "anastasia.net"
