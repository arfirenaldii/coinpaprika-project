import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Container from './components/Container';

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
      <input type="search" />
      <button type="submit">Search</button>
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
        console.log(json)
      })
  }, [])

  return (
    <Container>
      <div>Coin List</div>
      <Select />
      <Search />
      {loading ?
        <div>loading...</div>
        :
        <table>
          <thead>
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
              index <= 5 &&
              <tr key={index}>
                <td>
                  <Link to={`/detail/${value.id}`}>{value.id}</Link>
                </td>
                <td>{value.name}</td>
                <td>{value.symbol}</td>
                <td>{value.rank}</td>
                <td>{value.type}</td>
                <td>{value.is_active ? 'True' : 'False'}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      }
    </Container>
  );
}

export default Home;
