import React from "react";
import { useParams } from "react-router";

const UserDetails = () => {
  const { id } = useParams();

  const users = [
    { id: 1, name: "John", age: "25" },
    { id: 2, name: "Jane", age: "32" },
  ];

  // หา user ตาม id
  const user = users.find(
    (u) => u.id === Number(id)
  );

  return (
    <>
      <div>UserDetails</div>

      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </>
  );
};

export default UserDetails;