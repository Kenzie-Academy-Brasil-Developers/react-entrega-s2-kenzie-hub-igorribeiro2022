import { useHistory } from "react-router-dom";
import ButtonStyled from "./Button";
import FormStyled from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Formulario() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Digite uma senha!").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, "Senha fraca!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(data) {
    console.log(data);
    history.push("/home")
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Login</h2>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Digite aqui seu nome" {...register("email")} />
        {errors.email?.message}

      </div>
      <div>
        <label htmlFor="">Senha</label>
        <input type="password" placeholder="Digite aqui sua senha" {...register("password")} />
        {errors.password?.message}

      </div>

      <ButtonStyled colored="pp" type="submit">Entrar</ButtonStyled>
      <p>Ainda não possui uma conta?</p>
      <ButtonStyled onClick={() => history.push("/register")}>
        Cadastre-se
      </ButtonStyled>
    </FormStyled>
  );
}

export default Formulario;
