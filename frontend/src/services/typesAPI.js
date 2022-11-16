import API from "@/services/API";
import APIErrorHandler from "@/services/APIErrorHandler";

const typeData = (typeId) => APIErrorHandler(API().get(`/types/${typeId}`, { params: { populate: "deep" } }));

export { typeData };
