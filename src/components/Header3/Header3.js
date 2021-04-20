import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: lightblue;
    font-size: 50px;
    border: 1px solid yellow;
`;
const Container = styled.div`
  padding: 4em;
  background: papayawhip;
`;

const Header3 = () => {
    return (
        <div>
            <Title>Header 3 By Style Components</Title>
            <Container>
                <h2>DIV Container Style</h2>
                <p>Descriptions</p>
            </Container>
        </div>
    );
};

export default Header3;