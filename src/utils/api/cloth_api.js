
import axiosInstance from './../../services/AxiosInstance'

const BASE_URL = 'cloth';

const makeRequest = async (method, endpoint, data, queryParams) => {
  try {
    const url = `${BASE_URL}/${endpoint}`;
    const response = await axiosInstance[method](url, { ...data, params: queryParams });
    // console.log(response.data)
    return response.data;
  } 
  catch (error) {
    return error?.response?.data;
  }
};

// export const loginsd = async (queryParams) => makeRequest('post', 'login', null, queryParams);
export const getClothes = async (category) => makeRequest('get', `category/${category}`,);

// Add more functions for other device endpoints