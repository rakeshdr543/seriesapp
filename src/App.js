import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/authentication/LoginScreen.js';
import RegisterScreen from './components/authentication/RegisterScreen';
import ForgotPassword from './components/authentication/ForgotPassword';

function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  const [userDetails,setUserDetails]=useState({})

  const loginHandler=()=>{
    const loginData=localStorage.getItem('islogged');
    const loginInfo=JSON.parse(loginData);
    if(loginInfo){
      setLoggedIn(true)
    }
    
  }
 useEffect(() => {
  loginHandler();
  const localData=localStorage.getItem('user');
  const userInfo=JSON.parse(localData);
  setUserDetails(userInfo)
   return () => {
    //
   }
 }, [])
 return(
   <div>
     <BrowserRouter>
     <div className='grid-container'>
       <header className='header'>
         <div className='brand'>
         <Link to='/'>Breaking bad</Link>
         </div>
         <div className='header-links'>
         {loggedIn? (
           <Link to='/profile'>{userDetails.name}</Link>
         ):(
           <>
           <Link to='register'>Register</Link>
           <Link to='/signin'>Sign In</Link>
           </>
         )}
         </div>
       </header>
       <main className='main'>
       <div className='content'>
       <Route path='/' exact={true} component= {HomeScreen} />
       <Route path='/signin' component={LoginScreen}/>
       <Route path='/register' component={RegisterScreen}/>
       <Route path='/forgot' component={ForgotPassword} />
       </div>
       </main>
     </div>
     </BrowserRouter>
   </div>
 )
}

export default App;
