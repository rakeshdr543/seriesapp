import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import RegisterScreen from './components/authentication/RegisterScreen';
import LoginScreen from './components/authentication/LoginScreen';

function App() {
  const [keyword,setKeyword]=useState('');
  const [type,setType]=useState('characters');
  const [loggedIn,setLoggedIn]=useState(false)

  const fetchData=async()=>{
       const fetchedData=await axios.get(`https://breakingbadapi.com/api/${type}`)
       const {data}=fetchedData;
       console.log(data)
  }
  const localData=localStorage.getItem('user');
  const user=JSON.parse(localData);
 
  useEffect(() => {
    fetchData()
    return () => {
     //
    }
  }, [])
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    fetchData()
    
  }

  const handleChange=(e)=>{
    setKeyword(e.target.value);
  }
  const selectHandler=(e)=>{
    setType(e.target.value)
     console.log(type)
  }
  const loginHandler=()=>{
    setLoggedIn(true)
  }
  return (
    <div >
    
      {!loggedIn?(
        <div>
      <RegisterScreen/>
    <LoginScreen loggedIn={loggedIn} loginHandler={loginHandler} />
    </div>
      ):user.name}
    
   <Search keyword={keyword} handleChange={handleChange} selectHandler={selectHandler} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
