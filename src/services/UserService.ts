import axios from "axios";

export async function registerUser() {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = baseURL + "v1/auth/register";
  
    const {
      data: { Data },
    } = await axios(url);
  
    const result = .safeParse(Data);
  
    if (result.success) {
      console.log(result);
      
      return result.data;
    }
  }