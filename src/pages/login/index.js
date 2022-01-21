import { useEffect, useState } from "react";
import api from "../../newApi";

function Login(){
  const[login,setLogin] = useState('');
  const[loginDirty, setLoginDirty] = useState(false);
  const[loginError, setLoginError] = useState('Логин не может быть пустым');
  const[pass,setPass] = useState('');
  const[PassDirty, setPassDirty] = useState(false);
  const[PassError, setPassError] = useState('Пароль не может быть пустым');
  const[formValid, setFormValid] = useState(false);

  useEffect( () => {
      if(loginError||PassError){
          setFormValid(false);
      }
      else{
        setFormValid(true);
      }
  }, [loginError,PassError])

  function createJSON(){
    return JSON.stringify({
      login : login,
      password : pass
    });
  };

  async function request (userJSON){
    console.log(userJSON);
      try{
      localStorage.clear();
      const {data:loginData} = await api.endpoints.login(userJSON);
      console.log(loginData);

      localStorage.setItem('token', loginData.token);
      localStorage.setItem('user', JSON.stringify(loginData));
      
      window.location='/profile';
      } catch (e) {
        if(e.response.status===500)
          console.log("Введены некорректные данные или такого пользователя не существует");
      }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Trying to log in...");
    request(createJSON());
    
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    if(e.target.value === '')
      setLoginError('Логин не может быть пустым');
      else setLoginError('');
  }

  const handleChangePass = (e) => {
    setPass(e.target.value);
    if(e.target.value === '')
      setPassError('Пароль не может быть пустым');
      else setPassError('');
  }

  const blurHandler = (e) => {
    switch(e.target.name){
      case 'login':
        setLoginDirty(true);
        break;
      case 'password':
        setPassDirty(true);
        break;
    }
    
  }
    
    return(
        <form className="form" onSubmit={handleSubmit}>
        <h3>Войти</h3>

        

        <div className="form-group">
          <label>Логин</label>
          {(loginDirty && loginError) && <div style={{color:'red', fontSize: '10pt'}}>{loginError}</div>}
          <input
            type="text"
            className="form-control"
            name="login"
            placeholder="Логин"
            onChange={handleChangeLogin}
            onBlur={e=>blurHandler(e)}
            value={login}
          />
        </div>

        

        <div className="form-group">
          <label>Пароль</label>
          {(PassDirty && PassError) && <div style={{color:'red', fontSize: '10pt'}}>{PassError}</div>}
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Пароль"
            onChange={handleChangePass}
            onBlur={e=>blurHandler(e)}
            value={pass}
          />
        </div>

        <button disabled={!formValid} type="submit" className="btn btn-primary">
          Войти
        </button>
      </form>
    );
}

export default Login;