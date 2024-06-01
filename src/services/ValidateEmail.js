import axiosInstance from "./AxiosInstance"; // Ensure the import matches the export

export async function validateEmail(payload) {
  if (!payload) return { data: null, error: "Payload is missing" };

  try {
    const response = await axiosInstance.post("/auth/validate-email", payload);
    return { data: response.data.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

/*
Use this to send verification code to any email.
This updates the user's verification code.
*/
