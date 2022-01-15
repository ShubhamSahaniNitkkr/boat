import { GET_VLOGS, GET_PROFILE, SET_LOADING } from './Types';
export default (state, action) => {
  switch (action.type) {
    case GET_VLOGS:
      return { ...state, vlogs: action.payload, loading: false };
    case GET_PROFILE:
      return { ...state, userProfile: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
