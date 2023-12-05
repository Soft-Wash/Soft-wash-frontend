import { axiosInstance } from "./AxiosInstance";

export async function handleLogin(payload){
  let data,error;
  try {
    const response = await axiosInstance.post(`/auth/employee/login`, payload);
    data = response.data.noPasswordUser;
    const token = response.data.token
    localStorage.setItem("softwashLoginEmployee", JSON.stringify(data));
    localStorage.setItem("softwashLoginToken", JSON.stringify(token));

  } catch (err) {
    error = err;
  }
  return {data,error};

}