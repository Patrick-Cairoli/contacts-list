import axios from 'axios';
import {useState, useEffect, useCallback} from 'react'
import './App.css';

import Container from './components/Container/Container'
import Table from './components/Table/Table'
import Spinner from './components/Spinner/Spinner'

function App() {
  const [apiData, SetApiData] = useState([])
  const [selectedUser, SetSelectedUser] = useState('')

  const fetchData = useCallback( async () => {
    const rawData = await axios.get('https://randomuser.me/api/?results=3')
    const mappedApiData = await rawData.data.results.map(({ name, picture, gender, login, email, phone, location }) => {
      return { 
        id: login.uuid,
        userName: login.username,
        password: login.password,
        name: `${name.first} ${name.last}`,
        picture: picture.large,
        gender: gender,
        email: email,
        phone: phone,
        location: `${location.city}, ${location.country}.`
      }
    })
    SetApiData(mappedApiData)
  }, [])

  useEffect( () =>{
    fetchData();
  }, [fetchData])

  return (
    <div className="App">
      <div className="container mt-2">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <h1 className="text-muted">Contact Manager</h1>
          </div>
          <div className="col-auto">
            <button type="button" onClick={() => fetchData()} className="btn btn-outline-info">Fetch Random Users</button>
          </div>
        </div>
        <div className="row justify-content-between">
          {!apiData.length ? (<Spinner />) : (<Container data={apiData} SetSelectedUser={SetSelectedUser} />)}
          {(apiData.length > 0 && selectedUser.length > 0) && (<Table tableData={apiData} selectedUser={selectedUser} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
