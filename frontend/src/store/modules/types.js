import { typeData } from "@/services/typesAPI";

export default {
  state: {
    type: null,
  },

  actions: {
    async fetchType(ctx, typeId) {
      const types = ctx.getters.designsTypesList;

      if (types && types.length) {
        const type = types.filter((type) => type[0].id == typeId);
        ctx.commit("updateType", ...type[0]);
      } else {
        try {
          const response = await typeData(typeId);
          ctx.commit("updateType", response?.data?.data);
        } catch (error) {
          ctx.commit("updateType", null);
        }
      }
    },
  },

  mutations: {
    updateType(state, type) {
      state.type = type;
    },
  },

  getters: {
    typeData(state) {
      return state.type;
    },
  },
};
