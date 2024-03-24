import styled from "styled-components";

const AssinaturaContainer = styled.div`
    width: 40vw;
    padding-left: 15%;
`

const H1Container = styled.h1`
    margin-bottom:0;
`

const Texto1 = styled.p`
    margin: 0;
    font-size: 22px;
    font-weight: 300;
`
const Texto2 = styled.p`
    font-size: 66px;
    margin: 0;
`
const H2Container = styled.h2`
    font-size: 14px;
    font-weight: 300;
    height: 50px
    margin-bottom: 10%;
`
const NewsLetter = styled.section`
    display: flex;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    height: 50px
`
const Input = styled.input`
    width: 70%;
    border: none;

    &::placeholder {
        padding-left: 10px;
}
`
const Botao = styled.button`
    border: none;
    color: #f7f7f7;
    background-color: #ffcb47;
    width: 30%;
`
function AssinaturaNewsLetter() {
    return(
        <AssinaturaContainer>
            <H1Container>
                <Texto1>Sua casa com as</Texto1>
                <Texto2>melhores plantas</Texto2>
            </H1Container>
            <H2Container>
                Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torna-lo uma pessoa mais feliz no seu dia a dia.
                Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
            </H2Container>
            <NewsLetter>
                <Input placeholder="Insira seu e-mail"/>
                <Botao>Assinar Newsletter</Botao>
            </NewsLetter>
        </AssinaturaContainer>
    )
}

export default AssinaturaNewsLetter;