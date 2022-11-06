import API from "@/services/API";

const facilitiesList = () => API().get("/facilities", { params: { populate: "deep,2" } });

export { facilitiesList };
