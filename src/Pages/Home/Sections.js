import styled from 'styled-components'

export const SectionAbout = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 100vw;
    padding: 40px 10px;

    border-bottom: 1px solid var(--gray-2);

    gap: 15px;

    h2 {
        font-size: 14pt;
    }

    p {
        color: var(--gray-1);
        font-size: 10pt;
    }
`
export const SectionTech = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 100vw;
    padding: 40px 10px;


    gap: 15px;

    h3 {
        font-size: 14pt;
    }

    p {
        color: var(--gray-1);
        font-size: 10pt;
    }
`
