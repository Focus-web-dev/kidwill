import { createToaster } from "@meforma/vue-toaster";
import errorMessages from "@/constants/errorMessages";

const toast = createToaster();

const APIErrorHandler = async (func) => {
  try {
    const response = await func;
    return response;
  } catch (error) {
    toast.error(errorMessages.default);
    throw error;
  }
};

export default APIErrorHandler;
