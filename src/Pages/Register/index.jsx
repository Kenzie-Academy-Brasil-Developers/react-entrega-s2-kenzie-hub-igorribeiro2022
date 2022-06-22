import ButtonStyled from "../../Components/Form/Button";
import FormStyles from "../Register/FormStyles";
import Div from "./styles.js";
import Container from "../../Styles/container";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import api from "../../Services/api";
import { motion } from "framer-motion";

function Register() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Digite uma senha!")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Senha fraca!"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não coincidem!"),
    bio: yup.string().required("Digite uma bio!"),
    contact: yup.string().required("Coloque uma forma de contato!"),
    course_module: yup.string().required("Escolha um módulo!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) {
    const user = { name, email, password, bio, contact, course_module };
    console.log(user);
    toast
      .promise(api.post(`/users`, user), {
        pending: "Carregando, aguarde!",
        success: "Muito bem, agora faça seu login!",
        error: "Houve um erro, tente um novo email!",
      })
      .then((resp) => {
        history.push("/");
      })
      .catch((err) => {
      });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Div>
          <h1>Kenzie Hub</h1>
          <button onClick={() => history.push("/")}>Voltar</button>
        </Div>
        <FormStyles onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa</p>
          <div>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name?.message}
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email?.message}
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password?.message}
          </div>
          <div>
            <label>Confirmar Senha</label>
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message}
          </div>
          <div>
            <label>Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio?.message}
          </div>
          <div>
            <label>Contato</label>
            <input
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            {errors.contact?.message}
          </div>
          <div>
            <label>Selecione o Módulo</label>
            <select type="text" {...register("course_module")}>
              <option value="Selecione">Selecione</option>
              <option value="Primeiro Módulo">Primeiro Módulo</option>
              <option value="Segundo Módulo">Segundo Módulo</option>
              <option value="Terceiro Módulo">Terceiro Módulo</option>
              <option value="Quarto Módulo">Quarto Módulo</option>
              <option value="Quinto Módulo">Quinto Módulo</option>
              <option value="Sexto Módulo">Sexto Módulo</option>
            </select>
          </div>
          {errors.course_module?.message}
          <ButtonStyled type="submit" colored="pp">
            Cadastrar
          </ButtonStyled>
        </FormStyles>
      </Container>
    </motion.div>
  );
}

export default Register;
