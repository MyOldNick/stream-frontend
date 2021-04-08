//react
import { useHistory } from "react-router-dom";
//store
import { observer } from "mobx-react-lite";
import UserStore from "../../store/User";
//bootstrap
import { Navbar, Nav } from "react-bootstrap";

const Navigation = observer(() => {
    
  const history = useHistory();

  const goToLK = () => history.push("/lk");

  const goToLogin = () => history.push("/login");

  const goToHome = () => history.push("/");

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>STREAMS</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={goToHome}>Главная</Nav.Link>
        {UserStore.user ? (
          <Nav.Link onClick={goToLK}>ЛК</Nav.Link>
        ) : (
          <Nav.Link onClick={goToLogin}>Войти</Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
});

export default Navigation;
