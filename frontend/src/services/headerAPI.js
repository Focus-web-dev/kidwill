import API from "@/services/API";
import APIErrorHandler from "@/services/APIErrorHandler";

const globalHeader = () => APIErrorHandler(API().get("/global-header", { params: { populate: "deep" } }));

export { globalHeader };
