import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';

import Container from './components/Container';
import styled from 'styled-components';

const StyledTable = styled(Table)`
  &>tbody {
    border: transparent;
  }
  &>tbody>tr:nth-child(even)>td,
  &>tbody>tr:nth-child(even)>th {
    background-color: #F3F7FB;
  }
`

const StyledCard = styled(Card)`
  padding: 18px 30px;
  box-shadow: 0px 4px 8px rgba(0, 148, 255, 0.25);
  border-radius: 10px;
`

const TitleSmall = styled.div`
  font-size: 12px;
  color: #ACBCCF;
  margin: 14px 0px;
`

const Title = styled.div`
  font-size: 16px;
  color: #2569A5;
`

const StyledPagination = styled(Pagination)`
  & > li {
    margin: 0px 4px;
    color: black;
  }

  & > li > a {
    margin: 0px 4px;
    color: #444F5C;
  }

  & > li > a:hover {
    color: #444F5C;
  }

  & > .page-item > .page-link {
    border-radius: 6px;
  }

  & > .active > .page-link {
    background-color: #1B91E4;
  }
`

function Select() {
  return (
    <select>
      <option value="" disabled selected>Select</option>
      <option>Satu</option>
      <option>Dua</option>
      <option>Tiga</option>
    </select>
  )
}

function Search() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Search" />
      <Button type="submit">Search</Button>
    </form>
  )
}

function Home() {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/coins/')
      .then((response) => response.json())
      .then((json) => {
        setLoading(false)
        setData(json)
      })
  }, [])

  return (
    <Container>
      <TitleSmall>Coin List</TitleSmall>
      <StyledCard>
        <Title>Coin List</Title>
        <Stack direction="horizontal" gap={2} style={{ margin: '38px 0px' }}>
          <Select />
          <Search />
        </Stack>
        {loading ?
          <div>loading...</div>
          :
          <div>
            <StyledTable>
              <thead className='text-white' style={{ backgroundColor: '#3783C6' }}>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Symbol</th>
                  <th>rank</th>
                  <th>Type</th>
                  <th>Active</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) =>
                  index <= 3 &&
                  <tr key={index}>
                    <td>
                      <Link to={`/detail/${value.id}`} style={{ color: '#0062A6' }}>{value.id}</Link>
                    </td>
                    <td>{value.name}</td>
                    <td>{value.symbol}</td>
                    <td>{value.rank}</td>
                    <td>{value.type}</td>
                    <td>{value.is_active ? 'True' : 'False'}</td>
                    <td>
                      <Button style={{ backgroundColor: '#E11730' }}>Delete</Button>
                    </td>
                  </tr>
                )}
              </tbody>
            </StyledTable>
            <StyledPagination className="justify-content-end" style={{ marginTop: '25px' }}>
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>{6}</Pagination.Item>
              <Pagination.Item>{7}</Pagination.Item>
              <Pagination.Item>{8}</Pagination.Item>
              <Pagination.Item>{9}</Pagination.Item>
              <Pagination.Next />
            </StyledPagination>
          </div>
        }
      </StyledCard>
    </Container>
  );
}

export default Home;
