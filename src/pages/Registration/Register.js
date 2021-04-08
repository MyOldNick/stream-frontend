//react
import { useHistory } from "react-router-dom";
//bootstrap
import { Container, Form, Button } from "react-bootstrap";
//styles
import "./style.css";

const Register = () => {

  const history = useHistory();

  const goToLogin = () => history.push("/login");
  

  return (
    <Container>
      <h1 className="text-center mt-5 mb-5">Регистрация</h1>
      <Form.Control className="register-form" placeholder="Логин" />
      <Form.Control className="register-form" placeholder="Email" />
      <Form.Control className="register-form" placeholder="Пароль" />
      <div className="d-flex flex-column align-items-center">
        <Button className="register-button mt-1 mb-1">Регистрация</Button>
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
