import axios from "axios";

export const getStatus = async () => {
  const result = await axios({
    method: "get",
    url: "http://192.168.18.12:5000/",
  });
  return result;
};
