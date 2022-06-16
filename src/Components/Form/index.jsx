import { useHistory } from "react-router-dom";
import ButtonStyled from "./Button";
import FormStyled from "./styles";

function Formulario() {
  const history = useHistory()
  return (
    <FormStyled>
      <h2>Login</h2>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Digite aqui seu nome" />
      </div>
      <div>
        <label htmlFor="">Senha</label>
        <input type="password" placeholder="Digite aqui sua senha" />
      </div>

      <ButtonStyled colored='pp' type="submit"> Entrar</ButtonStyled>
      <p>Ainda não possui uma conta?</p>
      <ButtonStyled onClick={() => history.push('/register')}
 > Cadastre-se</ButtonStyled>
    </FormStyled>
  );
}

export default Formulario;
