import axios from 'axios'
import { REGISTER_USER_SUCCESS,REGISTER_USER_REQUEST,
    LOGIN_SUCCESS,LOGIN_REQUEST,LOGIN_FAIL } from '../constants/userConstants';


export const register= (myform) => async (dispatch) => {
    try{
    console.log(myform)
    dispatch({ type:REGISTER_USER_REQUEST  });
    const {data}=await axios.post('http://localhost:8000/auth/register',{myform})
    console.log(data)
    localStorage.setItem("server_token",data.server_token);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
}
catch (error) {
    console.log( error.response.data.message)
  }
}

export const login= (myform) => async (dispatch) => {
    console.log(myform)
    dispatch({ type:LOGIN_REQUEST  });
    const {data}=await axios.post('http://localhost:8000/auth/login',{myform})
    console.log(data)
    localStorage.setItem("server_token",data.server_token);
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
}