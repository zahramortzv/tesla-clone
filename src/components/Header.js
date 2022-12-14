import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [burgerStatus, setBergurStatus] = useState(false);
    
    return (
        <Container>
            <a>
                <img src="/icons/logo.svg"/>
            </a>

            <Menu>
                <a href='#'>Model S</a> 
                <a href='#'>Model 3</a> 
                <a href='#'>Model X</a> 
                <a href='#'>Model Y</a> 
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu onClick={()=> setBergurStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=> setBergurStatus(false)} />
                </CloseWrapper>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-in</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadasre</a></li>
                <li><a href='#'>Roadasre</a></li>
                <li><a href='#'>Roadasre</a></li>
                <li><a href='#'>Roadasre</a></li>
            </BurgerNav>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    min-heigh: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap
    }

    @media(max-width: 768px){
        display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: no-wrap
    }
`

const CustomMenu = styled(MenuIcon)`

`


const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right:0;
    background-color: white;
    width: 300px;
    z-index: 1000;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }

    z-index: 1000;
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`