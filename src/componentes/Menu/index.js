import styled from "styled-components";

const Opcoes = styled.ul`
    display: flex;
    font-weight: lighter;

`

const Opcao = styled.li `
    margin: 10px;
    transition: 0.4s all;

    &:hover {
        font-weight: bold;
        cursor: pointer;
    }
`

const textoMenu = ['Como fazer', '/','Ofertas', '/', 'Depoimentos', '/', 'Videos', '/', 'Meu Carrinho'  ]

function Menu() {
    return(
        <Opcoes>
            {textoMenu.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}

        </Opcoes>
    )
}

export default Menu;