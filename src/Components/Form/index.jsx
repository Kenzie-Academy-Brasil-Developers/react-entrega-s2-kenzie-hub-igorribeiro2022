import { useHistory } from "react-router-dom";
import ButtonStyled from "./Button";
import FormStyled from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../Services/api";
import { toast } from "react-toastify";

function Formulario({ user, setUser }) {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Digite uma senha!")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Senha fraca!"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction({ email, password }) {
    const user = { email, password };
    toast
      .promise(api.post(`/sessions`, user), {
        pending: "Carregando, aguarde!",
        success: "Tudo ok! Seja bem-vindo(a)!",
        error: "Houve um erro, verifique suas informações!",
      })
      .then((resp) => {
          setUser(resp.data);
          window.localStorage.setItem("tokenHub", resp.data.token);
          window.localStorage.setItem("data", JSON.stringify(resp.data));
          history.push("/home")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Login</h2>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("email")}
        />
        {errors.email?.message}
      </div>
      <div>
        <label htmlFor="">Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {errors.password?.message}
      </div>

      <ButtonStyled colored="pp" type="submit">
        Entrar
      </ButtonStyled>
      <p>Ainda não possui uma conta?</p>
      <ButtonStyled onClick={() => history.push("/register")}>
        Cadastre-se
      </ButtonStyled>
    </FormStyled>
  );
}

export default Formulario;
