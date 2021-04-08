//store
import UserStore from "../../store/User";
//bootstrap
import { Container } from "react-bootstrap";

const Profile = () => {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center mt-5">
        <h1 className="mt-1 mt-2">{UserStore.user?.login}</h1>
        <h1 className="mt-1 mt-2">{UserStore.user?.email}</h1>
        <h1 className="mt-1 mt-2">Ключ стрима:</h1>
        <h4>{UserStore.user?.stream_key}</h4>
      </div>
    </Container>
  );
};

export default Profile;
