
import axiosInstance from './../../services/AxiosInstance'

const BASE_URL = 'order';

const makeRequest = async (method, endpoint, data, queryParams) => {
  try {
    const url = `${BASE_URL}/${endpoint}`;
    const response = await axiosInstance[method](url, { ...data, params: queryParams });
    console.log(response.data)
    return response.data;
  } 
  catch (error) {
    return error?.response?.data;
  }
};

// export const loginsd = async (queryParams) => makeRequest('post', 'login', null, queryParams);
export const getBranch = async () => makeRequest('get','/');
export const getClothes = async (search) => makeRequest('get', search,'category');
export const loggedIn = async () => makeRequest('get', 'loggedIn', {});
export const chartUsers = async (query) => makeRequest('get', 'chart_users', {}, query);
export const getUser = async (search) => makeRequest('get', 'get_user', {}, search);
export const getUsers = async (search) => makeRequest('get', 'get_users', {}, search);
// Add more functions for other device endpoints