//react
import { useState } from "react";
import { useHistory } from "react-router-dom";
//store
import UserStore from "../../store/User";
//bootstrap
import { Container, Form, Button } from "react-bootstrap";
//styles
import "./style.css";

const Login = () => {
  const [formsData, setFormsData] = useState({});

  const history = useHistory();

  const goToRegister = () => history.push("/reg");

  const auth = () => {
    UserStore.authUser(formsData);

    setFormsData({})
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    const obj = formsData

    obj[name] = value

    setFormsData({...formsData, ...obj})
  };

  return (
    <Container>
      <h1 className="text-center mt-5 mb-5">Войти</h1>
      <Form.Control onChange={onChange} name="email" value={formsData.email || ''} className="login-form" placeholder="Email" />
      <Form.Control onChange={onChange} name="password" value={formsData.password || ''} className="login-form" placeholder="Пароль" />
      <div className="d-flex align-items-center flex-column">
        <Button onClick={auth} className="mt-1 mb-1 login-button" >Войти</Button>
        <Button
          onClick={goToRegister}
          className="mt-1 mb-1 login-button"
          variant="outline-primary"
        >
          Создать аккаунт
        </Button>
      </div>
    </Container>
  );
};

export default Login;
