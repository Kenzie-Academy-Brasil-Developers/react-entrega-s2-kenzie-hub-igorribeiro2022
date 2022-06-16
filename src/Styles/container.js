import styled from "styled-components";

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  max-height: 100vh;
  width: 100vw;

  h1 {
    font-size: 16pt;
    color: var(--pink-primary);
    margin-bottom: 15px;
  }
`;

export default Container;
