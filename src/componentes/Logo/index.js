import styled from "styled-components";

const LogoEstilo = styled.p`
    display: flex;
    margin: 10px;
    padding: 10px;
    font-weight: bold;
    color: green;
`
function Logo(){
    return(
    <LogoEstilo>CasaVerde</LogoEstilo>
    )
}

export default Logo;

