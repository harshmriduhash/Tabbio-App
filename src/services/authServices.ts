import axios from "axios";

export const uploadPhoto = async (data: any) => {
    const response: any = await axios
      .post(`/upload/pfp`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((e) => ({ error: e }));
    //check error
    if (response && response?.error) {
      const err = response?.error?.response.data;
      const msg = err?.data?.message || err?.status;
      throw new Error(msg);
    }
  
    return response?.data;
  };