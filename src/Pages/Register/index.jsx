import ButtonStyled from "../../Components/Form/Button";
import FormStyles from "../Register/FormStyles";
import Div from "./styles.js";
import Container from "../../Styles/container";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory()
  return (
    <Container>
        <Div>
            <h1>Kenzie Hub</h1>
            <button onClick={() => history.push('/')}>Voltar</button>
        </Div>
      <FormStyles>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
        <div>
          <label htmlFor="">Nome</label>
          <input type="text" placeholder="Digite aqui seu nome" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Digite aqui seu email" />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input type="password" placeholder="Digite aqui sua senha" />
        </div>
        <div>
          <label htmlFor="">Confirmar Senha</label>
          <input type="password" placeholder="Digite novamente sua senha" />
        </div>
        <div>
          <label htmlFor="">Bio</label>
          <input type="text" placeholder="Fale sobre você" />
        </div>
        <div>
          <label htmlFor="">Contato</label>
          <input type="text" placeholder="Opção de contato" />
        </div>
        <div>
          <label htmlFor="">Selecione o Módulo</label>
          <select type="text">
            <option value="Selecione">Selecione</option>
            <option value="Primeiro Módulo">Primeiro Módulo</option>
            <option value="Segundo Módulo">Segundo Módulo</option>
            <option value="Terceiro Módulo">Terceiro Módulo</option>
            <option value="Quarto Módulo">Quarto Módulo</option>
            <option value="Quinto Módulo">Quinto Módulo</option>
            <option value="Sexto Módulo">Sexto Módulo</option>
          </select>
          <ButtonStyled colored="pp">Cadastrar</ButtonStyled>
        </div>
      </FormStyles>
    </Container>
  );
}

export default Register;
