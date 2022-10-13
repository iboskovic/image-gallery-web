import axios from "axios";

const { REACT_APP_PROTOCOL, REACT_APP_HOST, REACT_APP_URL } = process.env;

const baseURL = `${REACT_APP_PROTOCOL}://${REACT_APP_HOST}/${REACT_APP_URL}`;

export class BaseService {
  protected instance = axios.create({ baseURL });
}
