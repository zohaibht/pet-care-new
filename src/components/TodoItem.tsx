import React from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onDelete, onToggle }) => {
  return (
    <li className="flex items-center justify-between border-b py-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-2"
        />
        <span className={`${todo.completed ? 'line-through' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
