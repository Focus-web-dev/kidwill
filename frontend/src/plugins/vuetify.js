import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#222831",
          secondary: "#30475E",
          error: "#eb5757",
          success: "#549920",
          surface: "#DDDDDD",
          background: "#F05454",
        },
      },
    },
  },
});
