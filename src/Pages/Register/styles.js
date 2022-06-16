import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height:100px;
  max-width: 370px;

  button {
    margin-top: 15px;
    height: 40px;
    border-radius: 5px;
    border: none;
    width: 50px;

    color: var(--gray-0);
    font-size: 11pt;
    background-color: ${(props) =>
      props.colored === "pp" ? "var(--pink-primary)" : "var(--gray-1)"};

    :hover {
      background-color: ${(props) =>
        props.colored === "pp" ? "var(--negative)" : "var(--gray-2)"};
      transition: 0.3s;
    }

    :active {
      background-color: ${(props) =>
        props.colored === "pp" ? "var(--primary-negative)" : "var(--gray-4)"};
      transform: scale(0.97);
      transition: 0.1s;
    }
  }
`;

export default Div;
