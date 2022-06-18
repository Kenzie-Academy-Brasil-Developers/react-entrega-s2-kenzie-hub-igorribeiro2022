import { HeaderHome } from "./HeaderHome";
import { SectionAbout, SectionTech } from "./Sections";
import { DivTechs, DivHeaderTech } from "./Divs";
import { ModalEdit, ModalNewTech, DivButtons, DivInputs } from "./ModalEdit";
import ButtonStyled from "../../Components/Form/Button";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../Services/api";
import { toast } from "react-toastify";

function Home({user, setUser}) {
    const history = useHistory();

    const formSchema = yup.object().shape({
        title: yup.string().required("Digite o nome da tecnologia"),
        status: yup.string().required("Digite o status!")
      });
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(formSchema),
      });
    
      function onSubmitFunction({title, status}) {
        const tech = { title, status };
        console.log(tech);
          
          api
            .post(`/users/techs`, tech, {
                
            })
            .then((resp) => {
              console.log(resp);
              toast.success("Tecnologia Cadastrada!");
              setUser(resp.data)
            })
            .catch((err) => {
              console.log(err);
              toast.error(err.response.data.message);
            });
      }

  return (
    <>
      <HeaderHome>
        <h1>Kenzie Hub</h1>
        <button onClick={() => {
            window.localStorage.clear()
            history.push("/")
        }}>Sair</button>
      </HeaderHome>
      <SectionAbout>
        <h2>Olá, {user.user.name}</h2>
        <p>{user.user.course_module}</p>
      </SectionAbout>
      <SectionTech>
        <DivHeaderTech>
          <h3>Tecnologias</h3>
          <button>+</button>
        </DivHeaderTech>
        <DivTechs>
            {user.user.techs.map((elem, index) => (
                <div key={index}>
                  <h4>{elem.title}</h4>
                  <p>{elem.status}</p>
                </div>
            ))}
          
        </DivTechs>







        <ModalNewTech>
          <section>
            <h5>Cadastrar Tecnologia</h5>
            <p onClick={() => {}}>X</p>
          </section>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <div>
              <label>Nome</label>
              <input type="text" placeholder="Digite o nome da tecnologia" {...register("title")} />
              {errors.title?.message}

            </div>
            <div>
              <label>Selecionar status</label>
              <input type="text" placeholder="Digite seu status com essa tecnologia" {...register("status")} />
              {errors.status?.message}

            </div>
            <ButtonStyled type="submit" colored="pp">Cadastrar Tecnologia</ButtonStyled>
          </form>
        </ModalNewTech>







        <ModalEdit>
          <section>
            <h5>Detalhes da Tecnologia</h5>
            <p onClick={() => {}}>X</p>
          </section>
          <form>
            <DivInputs>
              <label>Nome</label>
              <input type="text" placeholder="Digite o nome da tecnologia" />
            </DivInputs>
            <DivInputs>
              <label>Selecionar status</label>
              <input
                type="text"
                placeholder="Digite seu status com essa tecnologia"
              />
            </DivInputs>
            <DivButtons>
              <ButtonStyled colored="pp">Salvar Alterações</ButtonStyled>
              <ButtonStyled>Excluir</ButtonStyled>
            </DivButtons>
          </form>
        </ModalEdit>




      </SectionTech>
    </>
  );
}

export default Home;
