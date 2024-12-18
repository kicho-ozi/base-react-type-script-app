import * as React from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ padding: "10px", margin: "10px", border: "2px solid pink" }}>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице{" "}
      {user.address.street}
    </div>
  );
};

export default UserItem;
