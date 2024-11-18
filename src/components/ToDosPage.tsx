import axios from "axios";
import React, { useEffect, useState } from "react";
import { IToDo } from "../types/types";
import ToDoItem from "./ToDoItem";
import List from "./List";

interface ToDosPageProps {
}

const ToDosPage: React.FunctionComponent<ToDosPageProps> = (props) => {
    const [todos, setTodos] = useState<IToDo[]>([]);
    useEffect(() => {
      fetchToDos(); 
    }, []);
  
    async function fetchToDos() {
      try {
        const response = await axios.get<IToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
        setTodos(response.data);
      }
      catch(e) {
        console.log(e);
      }
    }
  return (
    <List items={todos} renderItem={(todo: IToDo) => <ToDoItem todo={todo} key={todo.id}/>}/>
  );
};

export default ToDosPage;
