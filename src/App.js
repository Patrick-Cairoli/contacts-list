import axios from 'axios';
import {useState, useEffect, useCallback} from 'react'
import './App.css';

import Container from './components/Container/Container'
import Table from './components/Table/Table'
import Spinner from './components/Spinner/Spinner'

function App() {
  const [apiData, SetApiData] = useState([])
  const [tableData, SetTableData] = useState([])


  const fetchData = useCallback( async () => {
    const rawData = await axios.get('https://randomuser.me/api/?results=4')
    const mappedApiData = await rawData.data.results.map(({name, picture, gender, login, email, phone }) => {
      return { 
        id: login.uuid,
        userName: login.username,
        password: login.password,
        name: `${name.first} ${name.last}`,
        picture: picture.large,
        gender: gender,
        email: email,
        phone: phone,
      }
    })
    SetApiData(mappedApiData)
  }, [apiData])

  useEffect( () =>{
    fetchData();
  }, [])

  return (
    <div className="App">
      <h1>Contact Classifier</h1>
      {!apiData.length ? (<Spinner />) : (<Container data={apiData}/>)}
      {apiData.length && (<Table tableData={apiData} />)}
    </div>
  );
}

export default App;



// SetSelectedUser({id: '',
// userName: '',
// password: '',
// name: 'Alvison',
// picture: '',
// gender: '',
// email: '',
// phone: ''});