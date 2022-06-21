import { DivButtons, DivInputs, ModalEdit } from "./ModalEdit";
import { toast } from "react-toastify";
import ButtonStyled from "../Form/Button";
import api from "../../Services/api";
import { motion } from "framer-motion";


export function ModalEditTech({modalVisibleEdit, setModalVisibleEdit, setTechs, techs, techStatus, techName, techId, setTechStatus}) {
    function deleteTech(e, id) {
        e.preventDefault();
        const filtered = techs.filter((elem) => elem.id !== id);
        const token = localStorage.getItem("tokenHub");
        api
          .delete(`/users/techs/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((resp) => {
            setModalVisibleEdit(false);
            toast.success("Tecnologia Deletada!");
            setTechs(filtered);
          })
          .catch((err) => {
            console.log(err);
            toast.error("err");
          });
      }


      function updateTech(e, status, id) {
        e.preventDefault()
        const obj = {status: status};
        const token = localStorage.getItem("tokenHub");
    
        const filtered = techs.filter((elem) => elem.id !== id)
        api
          .put(`/users/techs/${id}`, obj, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((resp) => {
            setModalVisibleEdit(false);
            toast.success("Tecnologia atualizada!");
            setTechs([...filtered, resp.data]);
          })
          .catch((err) => {
            console.log(err);
            toast.error("err");
          });
      }

    return (
      
        <ModalEdit modalVisibleEdit={modalVisibleEdit}>
          <section>
            <h5>Detalhes da Tecnologia</h5>
            <p onClick={() => {setModalVisibleEdit(false)}}>X</p>
          </section>
          <form>
            <DivInputs>
              <label>Nome</label>
              <input type="text" value={techName} disabled/>
            </DivInputs>
            <DivInputs>
              <label>Selecionar status</label>
              <select type="text" value={techStatus} onChange={(e) => setTechStatus(e.target.value)}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </DivInputs>
            <DivButtons>
              <ButtonStyled onClick={(e) => updateTech(e, techStatus, techId)} colored="pp">Salvar Alterações</ButtonStyled>
              <ButtonStyled onClick={(e) => deleteTech(e, techId)}>Excluir</ButtonStyled>
            </DivButtons>
          </form>
        </ModalEdit>
    )
}