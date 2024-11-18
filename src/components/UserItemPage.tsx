import React, { useEffect, useState } from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

interface UserItemPageParams {
    [key: string]: string | undefined
    'id': string;
}

const UserItemPage: React.FunctionComponent<{}> = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const navigate = useNavigate();
    useEffect(() => {
      fetchUser();
    }, []);
  
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>(
          "https://jsonplaceholder.typicode.com/users/" + params.id
        );
        setUser(response.data);
      } catch (e) {
        console.log(e);
      }
    }
  return (
    <div>
        <button onClick={() => navigate('/users')}>Назад</button>
        <h1>Страница пользователя {user?.name}</h1>
        <div>{user?.email}, город {user?.address.city}, улица {user?.address.street}</div>
    </div>
  );
};

export default UserItemPage;
