import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import ToDosPage from './components/ToDosPage';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavLink to="/users">Пользователи</NavLink>
      <NavLink to="/todos">Список дел</NavLink>
    </div>
      <Routes>
        <Route path={'/users'} element={<UsersPage/>}></Route>
        <Route path={'/users/:id'} element={<UserItemPage />}></Route>
        <Route path={'/todos'} element={<ToDosPage/>}></Route>
        <Route path={'*'} element={<ToDosPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
