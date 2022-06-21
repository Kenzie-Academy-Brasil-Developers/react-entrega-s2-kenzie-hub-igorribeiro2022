import { DivTechs } from "./Divs";
import React from "react";

export default function ListTechs({techs, setTechName, setTechStatus, setTechId, setModalVisibleEdit}) {
    return (
        <DivTechs>
          {techs?.map((elem, index) => (
            <div
              id={elem.id}
              key={index}
              onClick={() => {
                setTechName(elem.title);
                setTechStatus(elem.status);
                setTechId(elem.id);
                setModalVisibleEdit(true);
              }}
            >
              <h4>{elem.title}</h4>
              <p>{elem.status}</p>
            </div>
          ))}
        </DivTechs>
    )
}