import axios from 'axios'
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  REGISTER_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_FAIL,
} from '../constants/userConstants'

const headers = {
  Accept: 'application/json',
}
export const postanswer = (myform) => async (dispatch) => {
  try {
    console.log(myform)
    dispatch({ type: QUESTION_ANSWER_REQUEST })
    const { data } = await axios.post(
      'http://localhost:8000/question/postanswer',
      { myform }
    )
    console.log(data)
    dispatch({ type: QUESTION_ANSWER_SUCCESS, payload: data.user })
  } catch (error) {
    console.log(error.response, 'asdfgh')
    dispatch({ type: QUESTION_ANSWER_FAIL, payload: error.response.data.message })
  }
}
