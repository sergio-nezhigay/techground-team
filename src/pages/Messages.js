import React, { useState } from "react";
import { Container, Card, Table, Button } from "react-bootstrap";
import TaskModal from "../components/TaskModal";
import { sampleUserData } from "../data/sampleUserData";

function Messages() {
  const [showModal, setShowModal] = useState(false);
  const [sendingTasks, setSendingTasks] = useState([
    {
      name: "Щоденні новини",
      schedule: "щоденно",
      message: "Доброго дня! Сьогодні...",
      selectedUsers: [1, 2],
    },
    {
      name: "Тижнева вишенька",
      schedule: "щотижнево",
      message: "Доброго понеділка!...",
      selectedUsers: [3, 4],
    },
    {
      name: "Щотижнева розсилка",
      schedule: "щотижнево",
      message: "Це наше щотижневе повідомлення...",
      selectedUsers: [5, 6],
    },
  ]);
  const [newTask, setNewTask] = useState({
    name: "",
    schedule: "щоденно",
    message: "",
    selectedUsers: [],
  });

  const [selectedTaskIndex, setSelectedTaskIndex] = useState(-1);

  const findUserNameById = (userId) => {
    const user = sampleUserData.find((user) => user.id === userId);
    return user ? user.name : "";
  };

  const handleShowModal = (index = -1) => {
    if (index === -1) {
      // Create a new task
      setNewTask({
        name: "",
        schedule: "щоденно",
        message: "",
        selectedUsers: [],
      });
    } else {
      // Edit an existing task
      setNewTask({ ...sendingTasks[index] });
    }
    setSelectedTaskIndex(index);
    setShowModal(true);
  };

  const handleSaveTask = () => {
    if (selectedTaskIndex === -1) {
      setSendingTasks([...sendingTasks, newTask]);
    } else {
      sendingTasks[selectedTaskIndex] = newTask;
      setSendingTasks([...sendingTasks]);
    }
    setShowModal(false);
  };

  const handleDeleteTask = (index) => {
    sendingTasks.splice(index, 1);
    setSendingTasks([...sendingTasks]);
  };

  return (
    <Container className="mt-5">
      <h2>Керування розсилками</h2>
      <Card>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Назва розсилки</th>
                <th>Частота</th>
                <th>Оримувачі</th>
                <th>Текст розсилки</th>
                <th>Дії</th>
              </tr>
            </thead>
            <tbody>
              {sendingTasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.schedule}</td>
                  <td>
                    {task.selectedUsers.map((userId, index) => (
                      <span key={userId}>
                        {findUserNameById(userId)}
                        {index !== task.selectedUsers.length - 1 && <>, </>}
                      </span>
                    ))}
                  </td>
                  <td>{task.message}</td>
                  <td className="last-column">
                    <Button
                      className="margin-right-10"
                      variant="secondary"
                      onClick={() => handleShowModal(index)}
                    >
                      Редагувати
                    </Button>

                    <Button
                      className="margin-right-10"
                      variant="danger"
                      onClick={() => handleDeleteTask(index)}
                    >
                      Видалити
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="success" onClick={() => handleShowModal()}>
            Додати розсилку
          </Button>
        </Card.Body>
      </Card>
      <TaskModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        selectedTaskIndex={selectedTaskIndex}
        newTask={newTask}
        setNewTask={setNewTask}
        handleSaveTask={handleSaveTask}
      />
    </Container>
  );
}

export default Messages;
