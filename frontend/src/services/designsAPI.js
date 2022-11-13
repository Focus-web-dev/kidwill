import API from "@/services/API";
import APIErrorHandler from "@/services/APIErrorHandler";

const designsList = () => APIErrorHandler(API().get("/designs", { params: { populate: "deep" } }));

export { designsList };
