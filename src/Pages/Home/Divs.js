import styled from "styled-components";

export const DivHeaderTech = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    padding: 0px 5px;
    h3 {
        font-weight: 400;
    }
    
    button {
        background-color: var(--gray-3);
        color: var(--gray-0);
        font-weight: 500;
        font-size: 16pt;

        border: none;
        border-radius: 5px;

        height: 32px;
        width: 32px;

        display: flex;
        justify-content: center;
        align-items: center;

        :hover {
            transition: .3s;
        }
        
        :active {
            background-color: var(--gray-4);
            transform: scale(0.97);
        }
    }
`