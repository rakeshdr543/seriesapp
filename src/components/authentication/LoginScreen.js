import React, { useEffect, useState } from 'react';

const LoginScreen = ({loggedIn,loginHandler}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [details,setDetails]=useState({})
    const [validation,setValidation]=useState(true);
     
    const fetchUser=()=>{
        const localData=localStorage.getItem('user');
        const user=JSON.parse(localData);
        setDetails(user);
    }
    
    useEffect(() => {
        fetchUser()
        
    }, [])

    const checkAuth=()=>{
        if(email!==details.email){
            setValidation(false)
        }
        else if(password!== details.password){
            setValidation(false)
        }
        else{
            setValidation(true)
            
            loginHandler();
            
        }
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        checkAuth();
        
    }

    return (
        <div>
       
            <form onSubmit={submitHandler} >
                <ul className='form-container'>
                <li>
                <h2>
                Sign-In
                </h2>
                </li>
                <li>
                    <label htmlFor='email'>
                        Email
                    </label>
                    <input type='email' name='email' onChange={e=>setEmail(e.target.value)}/>
                </li><li>
                    <label htmlFor='password'>
                        Password
                    </label>
                    <input type='password' name='password' onChange={e=>setPassword(e.target.value)}/>
                </li>
                <li>
                    <button type='submit' className='button primary'>Signin</button>
                </li>
                <li style={{color:'red'}}>
                    {!validation && 'The email and password you entered did not match our records.'}
                </li>

                </ul>
            </form>
           
        </div>
    )
}

export default LoginScreen
