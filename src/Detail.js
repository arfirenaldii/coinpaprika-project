import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Background = styled.div`
  background-color: #F3F7FB;
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
`

const TitleDescription = styled.div`
  width: 125px;
`

const Description = styled.div`
  font-weight: 700;
`

const StyledCard = styled(Card)`
  padding: 18px 30px;
  box-shadow: 0px 4px 8px rgba(0, 148, 255, 0.25);
  border-radius: 10px;
`

const Title = styled.div`
  font-size: 16px;
  color: #2569A5;
  margin-bottom: 40px;
`

const TitleSmall = styled.div`
  font-size: 12px;
  color: #ACBCCF;
  padding: 14px 0px;
`

function Detail() {
  let params = useParams();
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/coins/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false)
        setData(json)
      })
  }, [])

  return (
    <Background>
      <Container>
        <TitleSmall>Coin Detail</TitleSmall>
        <StyledCard>
          <Title>Coin Detail</Title>
          {loading ?
            <div>loading...</div>
            :
            <div>
              <Wrapper>
                <TitleDescription>
                  <p>ID</p>
                </TitleDescription>
                <Description>
                  <p>{data.id}</p>
                </Description>
              </Wrapper>
              <Wrapper>
                <TitleDescription>
                  <p>Name</p>
                </TitleDescription>
                <Description>
                  <p>{data.name}</p>
                </Description>
              </Wrapper>
              <Wrapper>
                <TitleDescription>
                  <p>Symbol</p>
                </TitleDescription>
                <Description>
                  <p>{data.symbol}</p>
                </Description>
              </Wrapper>
              <Wrapper>
                <TitleDescription>
                  <p>Type</p>
                </TitleDescription>
                <Description>
                  <p>{data.type}</p>
                </Description>
              </Wrapper>
              <Wrapper>
                <TitleDescription>
                  <p>Active</p>
                </TitleDescription>
                <Description>
                  <p>{data.is_active ? 'True' : 'False'}</p>
                </Description>
              </Wrapper>
              <Wrapper>
                <TitleDescription>
                  <p>Is New ?</p>
                </TitleDescription>
                <Description>
                  <p>{data.is_new ? 'True' : 'False'}</p>
                </Description>
              </Wrapper>
            </div>
          }
        </StyledCard>
      </Container>
    </Background>
  );
}

export default Detail;
