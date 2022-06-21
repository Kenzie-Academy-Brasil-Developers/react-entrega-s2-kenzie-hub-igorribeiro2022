import styled from "styled-components";

export const ModalEdit = styled.div`
  display: ${(props) => props.modalVisibleEdit === true ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  width: 95vw;
  max-width: 400px;
  border-radius: 5px;

  position: fixed;

  box-shadow: 0px 0px 40px 200px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: 0px 0px 40px 1000px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 0px 0px 40px 1000px rgba(0, 0, 0, 0.73);

  section {
    background-color: var(--gray-2);
    width: 100%;
    margin: 0;
    border-radius: 5px 5px 0 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 15px;
    height: 40px;
    p {
      cursor: pointer;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;

      :hover {
        transition: 0.3s;
        background-color: var(--gray-3);
      }
      :active {
        transform: scale(0.95);
      }
    }
  }

  form {
    background-color: var(--gray-3);
    width: 100%;
    margin: 0;
    border-radius: 0 0 5px 5px;
    color: var(--negative);

    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    gap: 15px;
    div {
      
      input, select {
        width: 100%;
        height: 45px;
        padding: 15px;
        border-radius: 5px;
        border: none;

        font-size: 11pt;

        background-color: var(--gray-2);
        color: var(--gray-0);

        ::-webkit-input-placeholder {
          font-size: 9pt;
        }
      }
    }
  }
`;
export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  button {
    width: 49%;
  }
`;


export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  font-size: 9pt;
  
  width: 100%;
  gap: 5px;

`