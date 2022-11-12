const baseURL = process.env.VUE_APP_STRAPI_BASE_URL;
export default (path) => baseURL + path;
