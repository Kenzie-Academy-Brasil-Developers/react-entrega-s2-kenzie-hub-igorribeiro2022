import styled from "styled-components";

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