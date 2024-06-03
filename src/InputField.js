import React from 'react';

const InputField = ({ input, handleInputChange, handleAddTodo }) => {
  return (
    <div className="input-field">
      <input
        type="text"
        className="input"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button className="add-btn" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

export default InputField;