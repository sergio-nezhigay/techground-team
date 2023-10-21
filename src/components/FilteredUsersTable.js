import React from "react";

function FilteredUsersTable({ filteredUsers }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Канал</th>
            <th>Вік</th>
            <th>Місто </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.userType}</td>
              <td>{user.age}</td>
              <td>{user.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilteredUsersTable;
