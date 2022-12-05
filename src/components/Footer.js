import styled from "styled-components";
import icone_certo from "../assets/img/icone_certo.png"
import icone_erro from "../assets/img/icone_erro.png"
import icone_quase from "../assets/img/icone_quase.png"

export default function Footer(props) {



    return (
        <FinishedFooter data-test="footer" >
            {props.count}/8 CONCLUÍDOS
            <div>
                {props.iconFooter.map((i, index) => <img key={index} src={i} data-test={`${(i === icone_erro && 'no-icon') ||
                    (i === icone_quase && "partial-icon") || (i === icone_certo && 'zap-icon')}`} />
                )}
            </div>

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
img{
    margin-left: 5px;
    margin-top: 6px;
}
`
