import Formulario from "../../Components/Form";
import Container from "../../Styles/container";

function Login({user, setUser}) {
  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Formulario user={user} setUser={setUser} />
    </Container>
  );
}

export default Login;
