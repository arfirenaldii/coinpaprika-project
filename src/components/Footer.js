import React from 'react';
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';

const Background = styled.div`
  background-color: #1D4279;
`

const Text = styled.div`
  text-align: center;
  color: #FFFFFF;
`

function Footer() {
  return (
    <Background>
      <Container>
        <Text>Kandidat : Arfi Renaldi</Text>
      </Container>
    </Background>
  );
}

export default Footer;
