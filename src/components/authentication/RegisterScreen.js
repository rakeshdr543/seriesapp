import React, { useState } from 'react'

const RegisterScreen = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [rePassword,setRePassword]=useState('');
    const [auth,setAuth]=useState(true);
    const [textCheck,setTextCheck]=useState(true)

    const submitHandler=(e)=>{
        e.preventDefault();
        checkInputs();
        if(auth && textCheck){
            const user={name,email,password}
            console.log(user)
            localStorage.setItem('user',JSON.stringify(user))
        }
       
    }
    const checkInputs=()=>{
        if(password!==rePassword){  
            setAuth(false)
        }
        else if(name===''|| email===''|| password===''|| rePassword==='' || password.length<5){
            console.log('i am run')
            setTextCheck(false)
        }
        else{
            setAuth(true);
            setTextCheck(true);
        }
        
    }
    return (
        <div className='form'>
            <form onSubmit={submitHandler}>
            <ul className='form-container'>
            <li>
                <h2>
                    Create Account
                </h2>
            </li>
            <li>
                <label htmlFor='name'>
                    Name
                </label>
                <input type='name' name='name' onChange={e=>setName(e.target.value)}/>
            </li>
            <li>
                <label htmlFor='email'>
                    Email
                </label>
                <input type='email' name='email' onChange={e=>setEmail(e.target.value)}/>
            </li>
            <li>
                <label htmlFor='password'>
                    password
                </label>
                <input type='password' name='password' onChange={e=>setPassword(e.target.value)}/>
            </li>
            <li>
                <label htmlFor='rePassword'>
                    rePassword
                </label>
                <input type='rePassword' name='rePassword' onChange={e=>setRePassword(e.target.value)}/>
            </li>
            <li>
                <button type='submit' className='button primary'>Register</button>
            </li>
            <li style={{color:'red'}}>
                {!auth && '* Passwords does not match '}
                { !textCheck && name===''? '* Name field is empty ':null}
                {!textCheck && email===''? '* Email field is empty ':null}
                {!textCheck && password===''? '* Password field is empty ':null}
                {!textCheck && password.length<=5? '* Password size must be more than 5 characters':null}

                
                
            </li>
            </ul>

            </form>
        </div>
    )
}

export default RegisterScreen;

