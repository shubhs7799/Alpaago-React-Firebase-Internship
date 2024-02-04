
import React, { useState, useEffect } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "User1", addedDate: "2022-01-01", status: "Active" },
    { id: 2, username: "User2", addedDate: "2022-02-01", status: "Active" },
    // Add more users as needed
  ]);

  const [filteredUsers, setFilteredUsers] = useState(users);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      username: `User${users.length + 1}`,
      addedDate: new Date().toISOString().split("T")[0],
      status: "Active",
    };

    setUsers([...users, newUser]);
    setFilteredUsers([...users, newUser]);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const handleStatusChange = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId
        ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" }
        : user
    );

    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const handleSort = (column) => {
    const sortedUsers = filteredUsers.sort((a, b) =>
      sortOrder === "asc"
        ? a[column] > b[column]
          ? 1
          : -1
        : b[column] > a[column]
        ? 1
        : -1
    );

    setFilteredUsers([...sortedUsers]);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleDateFilter = (date) => {
    const filteredByDate = users.filter(
      (user) => user.addedDate === date.toISOString().split("T")[0]
    );
    setFilteredUsers(filteredByDate);
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <div>
      <h2>User Table</h2>
      <button onClick={handleAddUser}>Add User</button>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("username")}>Username</th>
            <th onClick={() => handleSort("addedDate")}>Added Date</th>
            <th onClick={() => handleSort("status")}>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.addedDate}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleStatusChange(user.id)}>
                  Change Status
                </button>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <label>Date Picker: </label>
      <input type="date" onChange={(e) => handleDateFilter(new Date(e.target.value))} />
    </div>
  );
};

export default UserTable;
