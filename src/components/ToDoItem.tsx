import * as React from 'react';
import { IToDo } from '../types/types';

interface ToDoItemProps {
    todo: IToDo;
}

const ToDoItem: React.FunctionComponent<ToDoItemProps> = ({todo}) => {
  return (
    <div>
        <input type='checkbox' checked={todo.completed}></input>
        {todo.id}. {todo.title}
    </div>
  );
};

export default ToDoItem;
