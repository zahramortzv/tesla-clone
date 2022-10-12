import React from 'react';
import styled from 'styled-components';

//Components
import Section from './Section';

const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImage="tesla_model1.jpg"
                leftBtnText="Custome order"
                rightBtnText="Existing Inventory"
            />  
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImage="tesla-model3.jpg"
                leftBtnText="Custome order"
                rightBtnText="Existing Inventory"
            />
             <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImage="tesla-modelx.jpg"
                leftBtnText="Custome order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImage="tesla-modelY.jpg"
                leftBtnText="Custome order"
                rightBtnText="Existing Inventory"
            />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    height: 100vh;
`