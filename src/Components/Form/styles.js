import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33.6911px 17.6477px;
  gap: 10px;
  color: var(--negative);

  height: auto;
  min-height: 400px;
  max-height: auto;
  width: 90%;
  max-width: 370px;

  border-radius: 5px;
  background-color: var(--gray-3);

  h2 {
    font-size: 13pt;
    color: var(--pink-primary);

  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  label {
    font-size: 12px;
    color: var(--gray-1);
  }

  input {
    height: 45px;
    width: 100%;
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

  select, option {
    height: 45px;
    width: 100%;
    padding: 0 15px;
    border-radius: 5px;
    border: none;
    font-size: 11pt;

    cursor: pointer;

    background-color: var(--gray-2);
    color: var(--gray-0);
  }

  p {
    color: var(--gray-1);
    font-size: 8pt;
  }

  ::-ms-expand {
    display: none;
  }
`;

export default FormStyled;
