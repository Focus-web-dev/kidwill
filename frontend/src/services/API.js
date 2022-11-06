import axios from "axios";

const baseURL = process.env.VUE_APP_STRAPI_BASE_URL;
export default (url = `${baseURL}/api`) =>
  axios.create({
    baseURL: url,
  });
