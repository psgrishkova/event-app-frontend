import { useEffect, useState } from "react";
import api from "../../service";
import "./index.css";

function Login({setToken}) {
  const [login, setLogin] = useState("");
  const [loginDirty, setLoginDirty] = useState(false);
  const [pass, setPass] = useState("");
  const [PassDirty, setPassDirty] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [loginError, setLoginError] = useState("Логин не может быть пустым");
  const [PassError, setPassError] = useState("Пароль не может быть пустым");

  useEffect(() => {
    if (loginError || PassError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [loginError, PassError]);

  function createJSON() {
    return JSON.stringify({
      login: login,
      password: pass,
    });
  }

  async function request(userJSON) {
    console.log(userJSON);
    try {
      localStorage.clear();
      const { data: loginData } = await api.endpoints.login(userJSON);
      console.log(loginData);
      setToken(loginData.token);
      localStorage.setItem("user", JSON.stringify(loginData));
      window.location.reload();
      window.location = "/home";
    } catch (e) {
      if (e.response.status === 500)
        console.log(
          "Введены некорректные данные или такого пользователя не существует"
        );
      alert(
        "Введены некорректные данные или такого пользователя не существует"
      );
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Trying to log in...");
    await request(createJSON());
  }

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    if (e.target.value === "") setLoginError("Логин не может быть пустым");
    else setLoginError("");
  };

  const handleChangePass = (e) => {
    setPass(e.target.value);
    if (e.target.value === "") setPassError("Пароль не может быть пустым");
    else setPassError("");
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "login":
        setLoginDirty(true);
        break;
      case "password":
        setPassDirty(true);
        break;
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form className="form" onSubmit={handleSubmit}>
          <h3>Войти</h3>

          <div className="form-group">
            <label>Login</label>
            {loginDirty && loginError && (
              <div style={{ color: "red", fontSize: "10pt" }}>{loginError}</div>
            )}
            <input
              type="text"
              className="form-control"
              name="login"
              placeholder="Login"
              onChange={handleChangeLogin}
              onBlur={(e) => blurHandler(e)}
              value={login}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            {PassDirty && PassError && (
              <div style={{ color: "red", fontSize: "10pt" }}>{PassError}</div>
            )}
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={handleChangePass}
              onBlur={(e) => blurHandler(e)}
              value={pass}
            />
          </div>

          <button
            disabled={!formValid}
            type="submit"
            className="btn btn-primary"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
