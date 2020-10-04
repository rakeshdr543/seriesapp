import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import Characters from './posts/Characters';
import Episodes from './posts/Episodes';

function HomeScreen() {
  const [type,setType]=useState('characters');
  const [posts,setPosts]=useState([])

  const fetchData=async()=>{
  
    const fetchedData=await axios.get(`https://breakingbadapi.com/api/${type}`)
    const {data}=fetchedData;
    setPosts(data)
       
  }

  useEffect(() => {
    fetchData()
    return () => {
     //
    }
  }, [posts])
  const selectHandler=(e)=>{
    setType(e.target.value)
  }
  
  return (
    <div >
   <Search selectHandler={selectHandler}  />
   {
     type==='characters'?(<Characters posts={posts}/>):(<Episodes posts={posts}/>)
   }
    </div>
  );
}

export default HomeScreen;
