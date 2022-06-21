import { SectionAbout, SectionTech } from "./Sections";
import { DivHeaderTech } from "./Divs";
import { yupResolver } from "@hookform/resolvers/yup";
import { HeaderHome } from "./HeaderHome";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ModalEditTech } from "../../Components/ModalEditTech";
import { ModalNewTech } from "../../Components/ModalNewTech";
import ListTechs from "../../Components/ListTechs"
import { motion } from "framer-motion";

function Home() {
  const data = JSON.parse(localStorage.getItem("data"));
  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);

  const [techs, setTechs] = useState(data.user.techs);
  const [techName, setTechName] = useState("");
  const [techStatus, setTechStatus] = useState("");
  const [techId, setTechId] = useState("");

  const formSchema = yup.object().shape({
    title: yup.string().required("Digite o nome da tecnologia"),
    status: yup.string().required("Digite o status!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
      <HeaderHome>
        <h1>Kenzie Hub</h1>
        <button
          onClick={() => {
            window.localStorage.clear();
            history.push("/");
          }}
          >
          Sair
        </button>
      </HeaderHome>
      <SectionAbout>
        <h2>Olá, {data.user.name}</h2>
        <p>{data.user.course_module}</p>
      </SectionAbout>
      <SectionTech>
        <DivHeaderTech>
          <h3>Tecnologias</h3>
          <button
            onClick={() => {
              setModalVisible(true);
            }}
            >
            +
          </button>
        </DivHeaderTech>
        

        <ListTechs techs={techs} setTechName={setTechName} setTechStatus={setTechStatus} setTechId={setTechId} setModalVisibleEdit={setModalVisibleEdit} />

        <ModalNewTech modalVisible={modalVisible} setModalVisible={setModalVisible} handleSubmit={handleSubmit} setTechs={setTechs} register={register} errors={errors} techs={techs} />

        <ModalEditTech modalVisibleEdit={modalVisibleEdit} setModalVisibleEdit={setModalVisibleEdit} techStatus={techStatus} techName={techName} techs={techs} techId={techId} setTechs={setTechs} statusTech={techStatus} setTechStatus={setTechStatus} />
      
      </SectionTech>
      </motion.div>
  );
}

export default Home;
