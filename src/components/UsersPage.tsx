import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";
import { useNavigate } from "react-router-dom";

interface UsersPageProps {}

const UsersPage: React.FunctionComponent<UsersPageProps> = (props) => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const navigate = useNavigate();

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem onClick={() => navigate('/users/' + user.id)} user={user} key={user.id} />}
    />
  );
};

export default UsersPage;
