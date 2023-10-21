import React from "react";
import { Modal, Form, Button, Dropdown } from "react-bootstrap";

import Dashboard from "./Dashboard";

function TaskModal({
  showModal,
  handleClose,
  selectedTaskIndex,
  newTask,
  setNewTask,
  handleSaveTask,
}) {
  return (
    <Modal show={showModal} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedTaskIndex === -1
            ? "Додавання розсилки"
            : "Редагування розсилки"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Dashboard setNewTask={setNewTask} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Назва розсилки</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введіть назву розсилки"
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Частота</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="primary">
                {newTask.schedule}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    setNewTask({ ...newTask, schedule: "щоденно" })
                  }
                >
                  щоденно
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setNewTask({ ...newTask, schedule: "щотижнево" })
                  }
                >
                  щотижнево
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Form.Group>
            <Form.Label>Текст розсилки</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Текст"
              value={newTask.message}
              onChange={(e) =>
                setNewTask({ ...newTask, message: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <span className="icon">&#10006;</span> Закрити
        </Button>
        <Button variant="primary" onClick={handleSaveTask}>
          <span className="icon">&#128190;</span> Зберегти
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskModal;
