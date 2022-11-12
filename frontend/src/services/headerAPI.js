import API from "@/services/API";

const globalHeader = () => API().get("/global-header", { params: { populate: "deep" } });

export { globalHeader };
