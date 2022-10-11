import axios from "axios";

const { REACT_APP_PROTOCOL, REACT_APP_HOST, REACT_APP_URL, REACT_APP_KEY } =
  process.env;

const baseURL = `${REACT_APP_PROTOCOL}://${REACT_APP_HOST}/${REACT_APP_URL}/${REACT_APP_KEY}`;

export class BaseService {
  protected instance = axios.create({ baseURL });
}
