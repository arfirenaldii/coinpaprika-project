import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const StyledNavbar = styled(Navbar)`
  background-color: #FFFFFF;
  box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.07);
  padding-top: 90px;
  padding-bottom: 0px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.active ? '#1E5387' : '#8597AC'};
  font-weight: ${props => props.active && '700'};
  border-bottom: ${props => props.active && 'solid 4px #1E5387'};
  padding: 8px;
`

function Navigation() {
  return (
    <StyledNavbar>
      <Container>
        <Nav className="me-auto">
          <StyledLink to={`/`}>Home</StyledLink>
          <StyledLink to={`/`} active={true}>Coin List</StyledLink>
        </Nav>
      </Container>
    </StyledNavbar>
  );
}

export default Navigation;
