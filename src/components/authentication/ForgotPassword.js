import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');

    const checkDetails=()=>{
        const localData=localStorage.getItem('user');
        const user=JSON.parse(localData);
        if(user.name===name && user.email===email){
            localStorage.setItem('islogged',JSON.stringify(true))
            console.log('authenticated');
        }
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        checkDetails();
    }
    return (
        <div className='form'>
        <form onSubmit={submitHandler} >
            <ul className='form-container'>
            <li>
            <h2>
           Forgot Password
            </h2>
            </li>
            <li>
                <label htmlFor='email'>
                    Email
                </label>
                <input type='email' name='email' onChange={e=>setEmail(e.target.value)}/>
            </li><li>
                <label htmlFor='Name'>
                    Enter Name:
                </label>
                <input type='name' name='name' onChange={e=>setName(e.target.value)}/>
            </li>
            <li>
                <button type='submit' className='button primary'>Signin</button>
            </li>
            </ul>
        </form>
       
    </div>
    )
}

export default ForgotPassword
