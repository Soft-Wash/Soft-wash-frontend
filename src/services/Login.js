import { axiosInstance } from "./AxiosInstance";

export async function handleLogin(payload){
  let data,error;
  try {
    const response = await axiosInstance.post(`/auth/user/login`, payload);
    data = response.data.noPasswordUser;
    const token = response.data.token
    localStorage.setItem("softwashLoginUser", JSON.stringify(data));
    localStorage.setItem("softwashLoginToken", JSON.stringify(token));

  } catch (err) {
    error = err;
  }
  return {data,error};

}