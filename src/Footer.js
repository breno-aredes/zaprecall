import styled from "styled-components";

export default function Footer() {
    return (
        <FinishedFooter>
            0/8 CONCLUÍDOS
        </FinishedFooter>
    )
}

//styled components 

const FinishedFooter = styled.footer`
width: 100%;
min-height: 50px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Recursive';
font-weight: 400;
font-size: 18px;
color: #333333;
padding: 10px;
`