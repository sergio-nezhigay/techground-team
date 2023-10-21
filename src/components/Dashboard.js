import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { saveAs } from "file-saver";

import FilteredUsersTable from "./FilteredUsersTable";
import { sampleUserData } from "../data/sampleUserData";

function Dashboard({ setNewTask, isExportButtonActive }) {
  const [filteredUsers, setFilteredUsers] = useState(sampleUserData);
  const [selectedUserType, setSelectedUserType] = useState("Telegram");
  const [selectedSource, setSelectedSource] = useState("невідомий");

  const userTypes = ["Всі користувачі", "Telegram", "Viber"];

  const handleUserTypeChange = (userType) => {
    setSelectedUserType(userType);
  };

  useEffect(() => {
    if (selectedUserType === "Всі користувачі") {
      setFilteredUsers(sampleUserData);
      if (setNewTask)
        setNewTask((oldTask) => ({
          ...oldTask,
          selectedUsers: sampleUserData.map((user) => user.id),
        }));
    } else {
      const newUsers = sampleUserData.filter(
        (user) => selectedUserType === user.userType
      );
      if (setNewTask)
        setNewTask((oldTask) => ({
          ...oldTask,
          selectedUsers: newUsers.map((user) => user.id),
        }));

      setFilteredUsers(newUsers);
    }
  }, [selectedUserType, setNewTask]);

  const handleExportData = () => {
    const jsonData = JSON.stringify(filteredUsers);
    const blob = new Blob([jsonData], { type: "application/json" });
    saveAs(blob, "filteredUsers.json");
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h3>Фільтрувати</h3>
          <div className="row">
            <div className="col row">
              <div className="col ">
                <h6>Тип мессенджера</h6>
                {userTypes.map((userType) => (
                  <div key={userType}>
                    <input
                      type="radio"
                      id={userType}
                      name="userType"
                      checked={selectedUserType === userType}
                      onChange={() => handleUserTypeChange(userType)}
                      className="margin-right-10"
                    />
                    <label htmlFor={userType}>{userType}</label>
                  </div>
                ))}
              </div>
              <div className="col ">
                <h6>Джерело трафіка</h6>
                {["невідомий", "реклама", "соціальні мережі", "вебсайт"].map(
                  (source) => (
                    <div key={source} className="filter-item">
                      <input
                        type="radio"
                        id={source}
                        name="filterOption"
                        className="margin-right-10"
                        checked={selectedSource === source}
                        onChange={() => setSelectedSource(source)}
                      />
                      <label htmlFor={source}>{source}</label>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="col-auto">
              {isExportButtonActive && (
                <button
                  className="btn btn-primary btn-md "
                  onClick={handleExportData}
                >
                  Експортувати в файл
                </button>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <FilteredUsersTable
            filteredUsers={filteredUsers}
            handleExportData={handleExportData}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default Dashboard;
