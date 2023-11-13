import axios from "axios";
import { ErrorHandler } from "./ErrorHandler";

export default function AxiosConfig() {
  const instanceConfig = axios.create({
    headers: {
      common: {
        Authorization: `Bearer 12|${localStorage.getItem("softwashUserToken")}`,
      },
    },
  });

  instanceConfig.interceptors.response.use(
    (response) => handleSuccess(response),
    (error) => {
      ErrorHandler(error);
    }
  );

  function handleSuccess(response) {
    return response;
  }

  return instanceConfig;
}
