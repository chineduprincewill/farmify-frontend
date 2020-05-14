import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

import axios from 'axios';

// REGISTER USER

export const register = (regData) => async(dispatch) => {

const body = JSON.stringify(regData);

// Headers
const config = {
   headers: {
       "Content-Type":"application/json"
   }
};

await axios
   .post('https://calm-eyrie-12411.herokuapp.com/users/register', body, config)
   .then(res => {
       dispatch({
           type: REGISTER_SUCCESS,
           payload: res.data
       });
   })
   .catch(err => {
    dispatch({
        type: REGISTER_FAIL,
        payload: err.response
    })
   });
}