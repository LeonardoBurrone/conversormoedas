import { CONVERTE_MOEDAS } from '../actions';

const INITIAL_STATE = [];

export default function (state=INITIAL_STATE, action) {
  switch(action.type) {
    case CONVERTE_MOEDAS:
      const result = action.payload.data;
      return result;

    default:
      return state;
  }
}