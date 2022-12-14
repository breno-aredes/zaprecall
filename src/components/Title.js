import logo from '../assets/img/logo.png'
import styled from "styled-components";

export default function Title() {
    return (
        <LogoContainer>
            <img src={logo} alt="" />
            <h1>zaprecall</h1>
        </LogoContainer>
    )
}

//styled componets 

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 48px 0 59px 0;
    img{
        width: 52px;
    }
    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
}
`
