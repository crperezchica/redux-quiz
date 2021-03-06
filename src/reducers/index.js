import { UPDATE_SUBTITLE, UPDATE_TITLE } from '../actions/header';

const initialState = {
  title: '',
  subtitle: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_TITLE:
      return { ...state, title: payload };
    case UPDATE_SUBTITLE:
      return { ...state, subtitle: payload };
    default: 
      return state;
  }
}
