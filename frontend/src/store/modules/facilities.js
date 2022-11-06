import { facilitiesList } from "@/services/facilitiesAPI";

export default {
  state: {
    facilities: null,
  },

  actions: {
    async getFacilities(ctx) {
      const response = await facilitiesList();
      ctx.commit("updateFacilities", response.data.data);
    },
  },

  mutations: {
    updateFacilities(state, facilities) {
      state.facilities = facilities;
    },
  },

  getters: {
    facilitiesList(state) {
      return state.facilities;
    },
  },
};
