import { designsList } from "@/services/designsAPI";

export default {
  state: {
    designs: null,
  },

  actions: {
    async fetchDesigns(ctx) {
      try {
        const response = await designsList();
        ctx.commit("updateDesigns", response?.data?.data);
      } catch (error) {
        ctx.commit("updateDesigns", null);
      }
    },
  },

  mutations: {
    updateDesigns(state, designs) {
      state.designs = designs;
    },
  },

  getters: {
    designsList(state) {
      return state.designs;
    },
  },
};
