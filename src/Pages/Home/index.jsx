import { HeaderHome } from "./HeaderHome"
import { SectionAbout, SectionTech } from "./Sections"
import { DivTechs, DivHeaderTech } from "./Divs"
import { ModalEdit, ModalNewTech } from "./ModalEdit"
import ButtonStyled from "../../Components/Form/Button"

function Home() {
    return (
        <>
            <HeaderHome>
                <h1>Kenzie Hub</h1>
                <button>Sair</button>
            </HeaderHome>
            <SectionAbout>
                <h2>Olá, Igor Ribeiro</h2>
                <p>Terceiro Módulo (Introdução ao Frontend)</p>
            </SectionAbout>
            <SectionTech>
                <DivHeaderTech>
                    <h3>Tecnologias</h3>
                    <button>+</button>
                </DivHeaderTech>
                <DivTechs>
                    <div><h4>React JS</h4><p>Intermediário</p></div>
                    <div><h4>React JS</h4><p>Intermediário</p></div>
                    <div><h4>React JS</h4><p>Intermediário</p></div>
                    <div><h4>React JS</h4><p>Intermediário</p></div>
                    <div><h4>React JS</h4><p>Intermediário</p></div>
                    <div><h4>React JS</h4><p>Intermediário</p></div>
                </DivTechs>
            <ModalNewTech>
                <section>
                    <h5>Cadastrar Tecnologia</h5>
                    <p>X</p>
                </section>
                <form>
                    <div>
                        <label>Nome</label>
                        <input type="text" placeholder="Digite o nome da tecnologia"/>
                    </div>
                    <div>
                        <label>Selecionar status</label>
                        <input type="text" placeholder="Digite seu status com essa tecnologia"/>

                    </div>
                    <ButtonStyled colored='pp'>Cadastrar Tecnologia</ButtonStyled>
                </form>
            </ModalNewTech>
            </SectionTech>
            <ModalEdit>

            </ModalEdit>
        </>
    )
}

export default Home