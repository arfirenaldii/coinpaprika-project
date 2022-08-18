import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

import Container from "./components/Container";

const Wrapper = styled.div`
  display: flex;
`

const Title = styled.div`
  width: 125px;
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
        console.log(json)
      })
  }, [])


  return (
    <Container>
      <p>Coin Detail</p>
      {loading ?
        <div>loading...</div>
        :
        <div>
          <Wrapper>
            <Title>
              <p>ID</p>
            </Title>
            <p>{data.id}</p>
          </Wrapper>
          <Wrapper>
            <Title>
              <p>Name</p>
            </Title>
            <p>{data.name}</p>
          </Wrapper>
          <Wrapper>
            <Title>
              <p>Symbol</p>
            </Title>
            <p>{data.symbol}</p>
          </Wrapper>
          <Wrapper>
            <Title>
              <p>Type</p>
            </Title>
            <p>{data.type}</p>
          </Wrapper>
          <Wrapper>
            <Title>
              <p>Active</p>
            </Title>
            <p>{data.is_active ? 'True' : 'False'}</p>
          </Wrapper>
          <Wrapper>
            <Title>
              <p>Is New ?</p>
            </Title>
            <p>{data.is_new ? 'True' : 'False'}</p>
          </Wrapper>
        </div>
      }
    </Container>
  );
}

export default Detail;
