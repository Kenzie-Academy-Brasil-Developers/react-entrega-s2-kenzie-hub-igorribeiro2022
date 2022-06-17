import styled from 'styled-components'

export const HeaderHome = styled.header`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    padding: 25px 10px;
    align-items: center;

    border-bottom: 1px solid var(--gray-2);

    h1 {
        color: var(--pink-primary);
        font-size: 16pt;
    }

    button {
        width: 55px;
        height: 32px;

        border-radius: 5px;
        border: none;

        background-color: var(--gray-3);
        color: var(--gray-0);

        :hover {
            transition: .3s;
        }
        
        :active {
            background-color: var(--gray-4);
            transform: scale(0.97);
        }
    }
`