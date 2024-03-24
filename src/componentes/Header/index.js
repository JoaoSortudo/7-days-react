import Menu from '../Menu';
import Logo from '../Logo';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo />
            <Menu />
        </HeaderContainer>
    )
}

export default Header;