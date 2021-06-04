import { IRegister } from "../interfaces";
import HttpService from "./HttpService";

const url = process.env.GATSBY_API_URL;


const Login = (body: { email: string; password: string }) =>
  HttpService.post(`${url}auth`, body);
const ForgotPassword = (body: { email: string; refClient: string }) =>
  HttpService.post(`${url}reset`, body);
const Register = (body: IRegister) => HttpService.post(`${url}register`, body);
const SetPassword = (body: {
  password?: string;
  token: string;
  resetCount: boolean;
}) => HttpService.post(`${url}password`, body);

const ApiService = {
  Login,
  Register,
  SetPassword,
  ForgotPassword,
};

export default ApiService;
