import styled from "styled-components";

export const ModalNewTech = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95vw;

    border-radius: 5px;

    position: fixed;
    
    

    box-shadow: 0px 0px 40px 200px rgba(0,0,0,0.73);
    -webkit-box-shadow: 0px 0px 40px 1000px rgba(0,0,0,0.73);
    -moz-box-shadow: 0px 0px 40px 1000px rgba(0,0,0,0.73);

    section {
        background-color: var(--gray-2);
        width: 100%;
        margin: 0;
        border-radius: 5px 5px 0 0 ;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 0 15px;
        height: 40px;

    }

    form {
        background-color: var(--gray-3);
        width: 100%;
        margin: 0;
        border-radius: 0 0 5px 5px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            width: 100%;
            
            input {
                width: 90%;

            }
        }
    }
`

export const ModalEdit = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0px 5px;
`
