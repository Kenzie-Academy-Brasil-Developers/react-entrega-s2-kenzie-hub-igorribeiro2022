import styled from "styled-components";

const ButtonStyled = styled.button`
  height: 45px;
  border-radius: 5px;
  border: none;
  width: 100%;

  color: var(--gray-0);
  font-size: 11pt;
  background-color: ${(props) =>
    props.colored === "pp" ? "var(--pink-primary)" : "var(--gray-1)"};

  :hover {
    background-color: ${(props) => props.colored === "pp" ? "var(--negative)" : "var(--gray-2)"};
    transition: 0.3s;
  }

  :active {
    background-color: ${(props) => props.colored === "pp" ? "var(--primary-negative)" : "var(--gray-4)"};
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export default ButtonStyled;
