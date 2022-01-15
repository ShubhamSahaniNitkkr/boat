import React, { useReducer } from 'react';
import axios from 'axios';
import GFcontext from './context';
import GFreducer from './reducer';
import { GET_USERS, GET_PROFILE, SET_LOADING } from './Types';

const GFaction = (props) => {
  const initialState = {
    users: [],
    userProfile: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(GFreducer, initialState);

  async function fethusers() {
    setloading();
    let res = await axios.get(`https://api.github.com/users`);
    dispatch({ type: GET_USERS, payload: res.data });
  }

  const searchUsers = async (text) => {
    setloading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({ type: GET_USERS, payload: res.data.items });
  };

  const getUserProfile = async (username) => {
    setloading();
    // eslint-disable-next-line no-unused-vars
    const res = await axios.get(
      `https://api.github.com/search/users?q='shubhamSunny'`
    );
    dispatch({
      type: GET_PROFILE,
      payload: {
        name: 'Shubham Sunny',
        dob: '01/09/1997',
        place: 'Gurugram,IN',
        designation: 'Head Coach',
        specialists: [
          'General Training',
          'Small group Training',
          'TABATA Training',
          'Core Training',
          'TRX Training',
          'Core Fusion',
          'Viper Training',
        ],
      },
    });
  };

  const setloading = () => dispatch({ type: SET_LOADING });
  return (
    <GFcontext.Provider
      value={{
        users: state.users,
        userProfile: state.userProfile,
        loading: state.loading,
        searchUsers,
        fethusers,
        getUserProfile,
      }}
    >
      {props.children}
    </GFcontext.Provider>
  );
};

export default GFaction;
