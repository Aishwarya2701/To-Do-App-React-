import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const List = ({ todos, handleDeleteTodo, handleToggleCompleted }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleCompleted(todo.id)}
          />
          <span style={{ textDecoration: todo.completed? "line-through" : "none" }}>
            {todo.text}
          </span>
          <button
            type="button"
            className="btn btn-danger float-right"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            Delete
          </button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default List;