import React, { useCallback, useState } from "react";
import { Button, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import List from "./List";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const handleAddTodo = useCallback(() => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  }, [input, todos]);

  const handleDeleteTodo = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id!== id));
  }, [todos]);

  const handleToggleCompleted = useCallback((id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {...todo, completed:!todo.completed };
        }
        return todo;
      })
    );
  }, [todos]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>To-Do List</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter task"
              value={input}
              onChange={handleInputChange}
            />
            <Button variant="primary" onClick={handleAddTodo}>
              Add Task
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <List
            todos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleCompleted={handleToggleCompleted}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;