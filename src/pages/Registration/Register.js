//react
import { useState } from 'react'
import { useHistory } from "react-router-dom";
//store
import UserStore from '../../store/User'
//bootstrap
import { Container, Form, Button } from "react-bootstrap";
//styles
import "./style.css";

const Register = () => {
  const [formsData, setFormsData] = useState({}) 

  const history = useHistory();

  const goToLogin = () => history.push("/login");

  const onChange = (event) => {

    const {name, value} = event.target

    const obj = formsData

    obj[name] = value

    setFormsData({...formsData, ...obj})
  }

  const reg = async () => {

    const res = await UserStore.createUser(formsData)

    if(res) history.push('/login')

  }
  

  return (
    <Container>
      <h1 className="text-center mt-5 mb-5">Регистрация</h1>
      <Form.Control onChange={onChange} name="login" value={formsData.login} className="register-form" placeholder="Логин" />
      <Form.Control onChange={onChange} name="email" value={formsData.email} className="register-form" placeholder="Email" />
      <Form.Control onChange={onChange} name="password" value={formsData.password} className="register-form" placeholder="Пароль" type="password" />
      <div className="d-flex flex-column align-items-center">
        <Button onClick={reg} className="register-button mt-1 mb-1">Регистрация</Button>
        <Button
          onClick={goToLogin}
          className="register-button mt-1 mb-1"
          variant="outline-primary"
        >
          Войти
        </Button>
      </div>
    </Container>
  );
};

export default Register;
