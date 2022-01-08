import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration/business">Зарегестрировать компанию</Link>
          </li>
          <li>
            <Link to="/registration/default">Зарегестрироваться как пользователь</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;