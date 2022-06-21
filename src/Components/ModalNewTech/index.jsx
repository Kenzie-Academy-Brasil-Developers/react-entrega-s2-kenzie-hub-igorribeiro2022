import { toast } from "react-toastify";
import api from "../../Services/api";
import ButtonStyled from "../Form/Button";
import { ModalNew } from "./ModalNew";

export function ModalNewTech({modalVisible, setModalVisible, handleSubmit, register, errors, statusTech, setTechs, techs}) {
  function onSubmitFunction(tech) {
    const token = localStorage.getItem("tokenHub");
    api
      .post(`/users/techs`, tech, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setModalVisible(false);
        toast.success("Tecnologia Cadastrada!");
        setTechs([...techs, resp.data]);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.message);
      });
  }

    return (
      <ModalNew modalVisible={modalVisible}>
      <section>
        <h5>Cadastrar Tecnologia</h5>
        <p
          onClick={() => {
            setModalVisible(false);
          }}
        >
          X
        </p>
      </section>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <label>Nome</label>
          <input type="text" placeholder="Digite o nome da tecnologia" {...register("title")} />
          {errors.title?.message}
        </div>
        <div>
          <label>Selecionar status</label>
          <select defaultValue={statusTech} type="text" {...register("status")} >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          {errors.status?.message}
        </div>
        <ButtonStyled type="submit" colored="pp">
          Cadastrar Tecnologia
        </ButtonStyled>
      </form>
    </ModalNew>
    )
}