import axios from "axios";

const BASE_URL = "https://sistema.hotelhub.com.pe";
const API_URL = "/api";
const SUCURSAL = 52;
const EMAIL_URL = "https://develop.garzasoft.com/mrsoft-news/public/api";

const api = axios.create({
  baseURL: BASE_URL + API_URL,
  //   headers: {
  //     Authorization: SUCURSAL,
  //   },
});

const emailApi = axios.create({
  baseURL: EMAIL_URL,
});

export { SUCURSAL, api, BASE_URL, emailApi };
