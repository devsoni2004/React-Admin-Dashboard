import axios from "axios";

const url = "https://exuberant-fatigues-jay.cyclic.app";

export const addSinghTek = async (data) => {
  const res = await axios.post(`${url}/SinghTek/register`, data);
  try {
    console.log(res.status);
    if (res.status === 201 && res.data.message) {
      return res.data.message;
    }
    return "error";
  } catch (error) {
    console.log(error);
  }
};

export const addmerchantsdetail = async (data) => {
  const res = await axios.post(`${url}/SinghTek/merchant/register`, {
    data,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1Y2ZmMDAzOWM1NDMzMjhhMmQyZWIiLCJpYXQiOjE2ODU1MTIwOTJ9.y6qGj1pIybV8rLXBDSsR7P_kU6WxT4nuXK9Zw0Ae9MI'
    }
  });

  try {
    console.log(res.status);
    if (res.status === 200 && res.data.message) {
      return res.data.message;
    }
    return "error";
  } catch (error) {
    console.log(error);
  }
};

export const LoginSinghTek = async (data, userType) => {
  if (userType == "Singhtek Users") {
    try {
      const res = await axios.post(`${url}/SinghTek/login`, data);
      if (res.status === 200 && res.data) {
        return res.data;
      }
      return "error";
    } catch (error) {
      console.log(error);
    }
  }
  else if (userType == "Merchants") {
    try {
      const res = await axios.post(`${url}/Merchant/login`, data);
      if (res.status === 200 && res.data) {
        return res.data;
      }
      return "error";
    } catch (error) {
      console.log(error);
    }
  }

};
