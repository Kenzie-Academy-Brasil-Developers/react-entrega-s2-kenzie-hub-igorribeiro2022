import Formulario from "../../Components/Form";
import Container from "../../Styles/container";
import { motion } from "framer-motion";

function Login({user, setUser}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <h1>Kenzie Hub</h1>
        <Formulario user={user} setUser={setUser} />
      </Container>
    </motion.div>
  );
}

export default Login;
