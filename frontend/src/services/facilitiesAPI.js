import API from "@/services/API";

const facilitiesList = () => API().get("/facilities", { params: { populate: "deep" } });

export { facilitiesList };
