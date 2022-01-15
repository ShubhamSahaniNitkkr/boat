/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import axios from 'axios';
import GFcontext from './context';
import GFreducer from './reducer';
import { GET_VLOGS, GET_PROFILE, SET_LOADING } from './Types';

import avatarImg from '../imgs/user1.jpeg';
import avatarImg2 from '../imgs/user.png';
import blog1 from '../imgs/blog1.jpeg';
import blog2 from '../imgs/blog2.jpg';

const GFaction = (props) => {
  const initialState = {
    vlogs: [],
    userProfile: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(GFreducer, initialState);
  const vlogsData = [
    {
      name: 'Shubham',
      createdAt: '1 min',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequar',
      avatar: avatarImg,
      images: [blog1, blog2],
    },
    {
      name: 'Shruti',
      createdAt: '16 min',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequar',
      avatar: avatarImg2,
      images: [blog2, blog1],
    },
  ];
  async function fetchVlogs() {
    setloading();
    // let res = await axios.get(`https://api.github.com/users`);
    dispatch({ type: GET_VLOGS, payload: vlogsData });
  }

  const searchVlogs = async (text) => {
    console.log(text, vlogsData);
    setloading();
    // const res = await axios.get(
    //   `https://api.github.com/search/users?q=${text}`
    // );
    const filteredData = vlogsData.filter(({ name }) =>
      name.toLowerCase().includes(text.toLowerCase())
    );
    const result = text === '' ? vlogsData : filteredData;
    dispatch({ type: GET_VLOGS, payload: result });
  };

  const getUserProfile = async (username) => {
    setloading();
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
        loading: state.loading,
        userProfile: state.userProfile,
        getUserProfile,
        vlogs: state.vlogs,
        fetchVlogs,
        searchVlogs,
      }}
    >
      {props.children}
    </GFcontext.Provider>
  );
};

export default GFaction;
