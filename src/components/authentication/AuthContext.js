// import React,{createContext,useEffect,useReducer} from 'react';
// export const AuthContext=createContext();

// const AuthContextProvider=(props)=>{
//     const [users,dispatch]=useReducer(userReducer,[],()=>{
//         const localData=localStorage.getItem('users');
//         return localData? JSON.parse(localData):[];
//     });

//     useEffect(()=>{
//         localStorage.setItem('users',JSON.stringify(users))
//     },[users])
// }