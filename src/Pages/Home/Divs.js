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

export const DivTechs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px 10px;
    background-color: var(--gray-3);
    border-radius: 5px;

    gap: 20px;
    
    div {
        cursor: pointer;
        :hover {
            background-color: var(--gray-2);
            transition: .3s;
        }

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: var(--gray-4);

        width: 100%;
        height: 49px;

        padding: 0 15px;
        border-radius: 5px;
    }

`