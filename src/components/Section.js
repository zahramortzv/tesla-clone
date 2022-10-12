import React from 'react';
import styled from 'styled-components';

const Section = () => {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchess Delivery</p>
            </ItemText>
            <ButtonGrup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGrup>
        </Wrap>
    );
};

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    background-image: url('/images/tesla_model1.jpg');
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center
`

const ButtonGrup = styled.div`

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: column;
`

const RightButton = styled.div`

`