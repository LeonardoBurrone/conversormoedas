import { API_KEY } from '../currency-api-key';
import axios from 'axios';

const BASE_URL = 'https://apilayer.net/api/';

export const CONVERTE_MOEDAS = 'CONVERTE_MOEDAS';

export function converteMoedas(converte) {
  const url = `${BASE_URL}/live?access_key=${API_KEY}&source=${converte.de}&currencies${converte.para}`;

  const request = axios.get(url);
  return {
    type: CONVERTE_MOEDAS,
    payload: request
  }
}